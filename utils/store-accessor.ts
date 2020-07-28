import { Store, ActionTree } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Example from '~/store/example'
import App from '~/store/app'
import User from '~/store/user'

interface RootState {
  exampleModule: Example,
  appModule: App
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit (_context, _server: { req: any; app: Vue }) {
    // eslint-disable-next-line no-console
    // console.log(_context)
    UserModule.SetToken()
  }
}

// eslint-disable-next-line import/no-mutable-exports
let ExampleModule: Example, AppModule: App, UserModule: User

function initialiseStores (store: Store<any>): void {
  ExampleModule = getModule(Example, store)
  AppModule = getModule(App, store)
  UserModule = getModule(User, store)
}

export { initialiseStores, ExampleModule, AppModule, UserModule }
