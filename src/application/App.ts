import { RemoteWireDataRetriever } from "../infrastructure/RemoteWireDataRetriever";

export class App {
  static Build(): App {
    const app = new App();
    return app;
  }
  private constructor() {
    console.log('App constructor')
  }

  start() {
    const wireDataReceiver = new RemoteWireDataRetriever();
    wireDataReceiver.retrieve();
  }
}