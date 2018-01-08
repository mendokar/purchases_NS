import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as purchase from "nativescript-purchase";

purchase.init([
    "com.wnsol.seminario1"
]);

platformNativeScriptDynamic().bootstrapModule(AppModule);
