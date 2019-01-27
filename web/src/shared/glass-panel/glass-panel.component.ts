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

import {Component, Directive, Input, OnInit} from "@angular/core";

@Component({
    selector: "mt-glass-panel",
    templateUrl: "glass-panel.component.html",
    styleUrls: ["glass-panel.component.css"],
})

export class MTGlassPanelComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
    }
}

@Directive({
    selector: "mt-glass-panel-header",
})
export class MTGlassPanelHeaderDirective {

}

@Directive({
    selector: "mt-glass-panel-body",
})
export class MTGlassPanelBodyDirective {

}
