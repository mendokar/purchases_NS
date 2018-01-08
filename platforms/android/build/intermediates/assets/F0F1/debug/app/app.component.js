"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var purchase = require("nativescript-purchase");
var AppComponent = (function () {
    function AppComponent() {
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.getData = function () {
        purchase.getProducts().then(function (res) {
            console.log(res);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsZ0RBQWtEO0FBUWxEO0lBQUE7SUFRQSxDQUFDO0lBUEMsa0NBQWtDO0lBRWxDLDhCQUFPLEdBQVA7UUFDRSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQVBVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBQyxzQkFBc0I7U0FDbkMsQ0FBQztPQUNXLFlBQVksQ0FReEI7SUFBRCxtQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0ICogYXMgcHVyY2hhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXJjaGFzZVwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uU3RhdGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXB1cmNoYXNlL3RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXJjaGFzZS9wcm9kdWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6XCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBnZXREYXRhKCl7XG4gICAgcHVyY2hhc2UuZ2V0UHJvZHVjdHMoKS50aGVuKHJlcyA9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSlcbiAgfVxufVxuIl19