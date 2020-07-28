import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'example',
  namespaced: true,
  stateFactory: true
})
export default class Example extends VuexModule {
  public test: string = 'initial'

  @Mutation
  private setTest (val: string) {
    this.test = val
  }

  @Action
  public SetTest (val: string) {
    this.setTest(val)
  }
}
