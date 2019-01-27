/*
 * Mitch Talmadge's Web Portfolio
 * Copyright (C) 2019 Mitch Talmadge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {ErrorHandler, NgModule, Optional, SkipSelf} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CustomErrorHandler} from "./error-handler";
import {LoaderService} from "./services/loader.service";

/**
 * This module contains the service and other things which should only load once in the application.
 */
@NgModule({
    imports: [
        HttpModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        {
            provide: ErrorHandler,
            useClass: CustomErrorHandler,
        },
        LoaderService,
    ],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() otherCoreModule: CoreModule) {
        if (otherCoreModule) {
            throw new Error("The Core Module was imported twice. It can only be imported once (in the root module)");
        }
    }

}
