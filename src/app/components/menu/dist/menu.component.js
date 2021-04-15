"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuComponent = void 0;
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var operators_1 = require("rxjs/operators");
var sweetalert2_1 = require("sweetalert2");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(breakpointObserver, _dataService) {
        this.breakpointObserver = breakpointObserver;
        this._dataService = _dataService;
        this.isHandset$ = this.breakpointObserver.observe(layout_1.Breakpoints.Handset)
            .pipe(operators_1.map(function (result) { return result.matches; }), operators_1.shareReplay());
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.cityName = 'manizales';
        this.getWeather(this.cityName);
    };
    MenuComponent.prototype.getWeather = function (cityName) {
        var _this = this;
        this._dataService.getWeather(cityName)
            .subscribe(function (res) {
            _this.weatherRes = res;
            console.log(_this.weatherRes);
        }, function (err) { return sweetalert2_1["default"].fire('City not found'); });
    };
    MenuComponent.prototype.sendLocation = function (cityName) {
        this.getWeather(cityName.value);
        console.log(cityName.value);
        cityName.value = '';
        cityName.focus();
        return false;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
