export class App {
  static Build(): App {
    const app = new App();
    return app;
  }
  private constructor() {
    console.log('App constructor')
  }

  start() {
    console.log('starting Wire Catalog app');
  }
}