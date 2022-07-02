import { RemoteRecipeDataRetriever } from "./RemoteWireDataReceiver";

export class App {
  static Build(): App {
    const app = new App();
    return app;
  }
  private constructor() {
    console.log('App constructor')
  }

  start() {
    const wireDataReceiver = new RemoteRecipeDataRetriever();
    wireDataReceiver.retrieve();
  }
}