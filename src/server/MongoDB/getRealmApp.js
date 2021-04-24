export function getRealmApp() {
    if (app === undefined) {
      const appId = "i-home-bhcic"; // Set Realm app ID here.
      const appConfig = {
        id: appId,
        timeout: 10000,
        app: {
          name: "default",
          version: "0",
        },
      };
      app = new Realm.App(appConfig);
    }
    return app;
  }