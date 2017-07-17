import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
// import {enableProdMode} from "@angular/core";

// require("file-loader!../push-config.json");
// require("file-loader!../google-services.json");
// if (process.env.ENV === "production") {
//     enableProdMode();
// }
platformBrowserDynamic().bootstrapModule(AppModule);
