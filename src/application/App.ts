import { IApp } from './IApp';
import { startApp } from './startApp';

export class App implements IApp {
  static Build(): App {
    const app = new App();
    return app;
  }
  private constructor() {
    console.log('App constructor')
  }

  start() {
    startApp();
  }
}