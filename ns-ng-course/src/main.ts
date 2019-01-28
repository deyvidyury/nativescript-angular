// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";

import { AppModule } from "./app/app.module";

import { keepAwake, allowSleepAgain } from "nativescript-insomnia";

let options: AppOptions = {};
if (module["hot"]) {
  const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

  options.hmrOptions = {
    moduleTypeFactory: () => AppModule,
    livesyncCallback: platformReboot => {
      console.log("HRM: Sync...");
      hmrUpdate();
      setTimeout(platformReboot, 0);
    }
  };
  hmrUpdate();
  module["hot"].accept(["./app/app.module"]);
}

keepAwake().then(function() {
  console.log("Insomnia is active");
});

platformNativeScriptDynamic(options).bootstrapModule(AppModule);
