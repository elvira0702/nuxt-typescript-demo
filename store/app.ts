import {
  VuexModule,
  Module,
  Mutation,
  Action
} from 'vuex-module-decorators'

export enum DeviceType {
  Mobile,
  Desktop
}

interface AppState {
  device: DeviceType,
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

@Module({ namespaced: true, stateFactory: true, name: 'app' })
export default class App extends VuexModule implements AppState {
  public device = DeviceType.Desktop

  public sidebar = {
    opened: true,
    withoutAnimation: false
  }

  @Mutation
  private TOGGLE_DEVICE (device: DeviceType) {
    this.device = device
  }

  @Mutation
  private TOGGLE_SIDEBAR (withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
  }

  @Mutation
  private CLOSE_SIDEBAR (withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
  }

  @Action
  public ToggleDevice (device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public ToggleSideBar (withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar (withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }
}
