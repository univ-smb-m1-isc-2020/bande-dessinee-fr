(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\visar\Desktop\bande-dessinee-fr\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1r+w":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboardpage/home/home.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-nav/dashboard-nav.component */ "gXHc");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[2, "padding-left", "280px"], ["id", "content", 1, "w-100", 2, "position", "fixed", "background-color", "aqua"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__["DashboardNavComponent"]], styles: ["div#content[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n    }"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    server: "http://localhost:8080/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8Mh":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signout() {
        this.authService.signout();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 21, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/movies", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/movies", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/publishers", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/notifications", 1, "nav-link"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "navbar-nav", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bande Dessinee FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Publishers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_19_listener() { return ctx.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Se deconnecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], encapsulation: 2 });


/***/ }),

/***/ "ISpL":
/*!***********************************!*\
  !*** ./src/app/classes/client.ts ***!
  \***********************************/
/*! exports provided: Client, AuthenticateUtilisateur, AuthenticationResponse, CreateMovies, CreateMoviesAndPublisher, CreatePublishers, CreateUtilisateur, CreateUtilisateur_Publisher, Movies, Notifications, Pages, PaginationMovie, PaginationPublisher, Publishers, RefreshUtilisateur, Utilisateur, Utilisateur_Publisher, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateUtilisateur", function() { return AuthenticateUtilisateur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResponse", function() { return AuthenticationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMovies", function() { return CreateMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMoviesAndPublisher", function() { return CreateMoviesAndPublisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePublishers", function() { return CreatePublishers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUtilisateur", function() { return CreateUtilisateur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUtilisateur_Publisher", function() { return CreateUtilisateur_Publisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movies", function() { return Movies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return Notifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationMovie", function() { return PaginationMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPublisher", function() { return PaginationPublisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publishers", function() { return Publishers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshUtilisateur", function() { return RefreshUtilisateur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilisateur", function() { return Utilisateur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilisateur_Publisher", function() { return Utilisateur_Publisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function() { return ApiException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.9.0 (NJsonSchema v10.4.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

class Client {
    constructor(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.http = http ? http : window;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://bande-dessinee-fr.oups.net/api/";
    }
    /**
     * @param password (optional)
     * @param database (optional)
     * @param offset (optional)
     * @return Success
     */
    admin(password, database, offset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Admin?";
            if (password === null)
                throw new Error("The parameter 'password' cannot be null.");
            else if (password !== undefined)
                url_ += "password=" + encodeURIComponent("" + password) + "&";
            if (database === null)
                throw new Error("The parameter 'database' cannot be null.");
            else if (database !== undefined)
                url_ += "database=" + encodeURIComponent("" + database) + "&";
            if (offset === null)
                throw new Error("The parameter 'offset' cannot be null.");
            else if (offset !== undefined)
                url_ += "offset=" + encodeURIComponent("" + offset) + "&";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processAdmin(_response);
        });
    }
    processAdmin(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    login(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Auth/login";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processLogin(_response);
        });
    }
    processLogin(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AuthenticationResponse.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    register(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Auth/register";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processRegister(_response);
        });
    }
    processRegister(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AuthenticationResponse.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    refresh(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Auth/refresh";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processRefresh(_response);
        });
    }
    processRefresh(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AuthenticationResponse.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param page (optional)
     * @return Success
     */
    movieGetPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Movie?";
            if (page === null)
                throw new Error("The parameter 'page' cannot be null.");
            else if (page !== undefined)
                url_ += "page=" + encodeURIComponent("" + page) + "&";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Authorization": "Bearer" + localStorage.getItem("token"),
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processMovie(_response);
        });
    }
    processMovie(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = PaginationMovie.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    movieCreate(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Movie";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processMovie2(_response);
        });
    }
    processMovie2(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    movieGetById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Movie/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processMovie3(_response);
        });
    }
    processMovie3(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = Movies.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    movieUpdate(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Movie/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processMovie4(_response);
        });
    }
    processMovie4(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    movie5(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Movie/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "DELETE",
                headers: {}
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processMovie5(_response);
        });
    }
    processMovie5(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param page (optional)
     * @return Success
     */
    publisher(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Publisher?";
            if (page === null)
                throw new Error("The parameter 'page' cannot be null.");
            else if (page !== undefined)
                url_ += "page=" + encodeURIComponent("" + page) + "&";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processPublisher(_response);
        });
    }
    processPublisher(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = PaginationPublisher.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    publisher2(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Publisher";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processPublisher2(_response);
        });
    }
    processPublisher2(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    publisher3(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Publisher/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processPublisher3(_response);
        });
    }
    processPublisher3(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = Publishers.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    publisher4(id, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Publisher/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processPublisher4(_response);
        });
    }
    processPublisher4(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    publisher5(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Publisher/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "DELETE",
                headers: {}
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processPublisher5(_response);
        });
    }
    processPublisher5(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    utilisateur() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processUtilisateur(_response);
        });
    }
    processUtilisateur(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = Utilisateur.fromJS(resultData200);
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param body (optional)
     * @return Success
     */
    utilisateurUpdate(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processUtilisateur2(_response);
        });
    }
    processUtilisateur2(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param authorization (optional)
     * @return Success
     */
    utilisateurDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processUtilisateur3(_response);
        });
    }
    processUtilisateur3(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param authorization (optional)
     * @return Success
     */
    notificationsAll(authorization) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur/notifications";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Authorization": authorization !== undefined && authorization !== null ? "" + authorization : "",
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processNotificationsAll(_response);
        });
    }
    processNotificationsAll(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Notifications.fromJS(item));
                }
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param authorization (optional)
     * @return Success
     */
    notificationsDelete(id, authorization) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur/notifications/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "DELETE",
                headers: {
                    "Authorization": authorization !== undefined && authorization !== null ? "" + authorization : "",
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processNotifications(_response);
        });
    }
    processNotifications(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    likeAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur/like";
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "GET",
                headers: {
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processLikeAll(_response);
        });
    }
    processLikeAll(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(Utilisateur_Publisher.fromJS(item));
                }
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @param authorization (optional)
     * @param body (optional)
     * @return Success
     */
    like(authorization, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur/like";
            url_ = url_.replace(/[?&]$/, "");
            const content_ = JSON.stringify(body);
            let options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Authorization": authorization !== undefined && authorization !== null ? "" + authorization : "",
                    "Content-Type": "application/json",
                    "Accept": "text/plain"
                }
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processLike(_response);
        });
    }
    processLike(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
    /**
     * @return Success
     */
    dislike(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url_ = this.baseUrl + "/Utilisateur/like/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            let options_ = {
                method: "DELETE",
                headers: {}
            };
            const _response = yield this.http.fetch(url_, options_);
            return yield this.processLike2(_response);
        });
    }
    processLike2(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = response.status;
            let _headers = {};
            if (response.headers && response.headers.forEach) {
                response.headers.forEach((v, k) => _headers[k] = v);
            }
            ;
            if (status === 200) {
                const _responseText = yield response.text();
                return;
            }
            else if (status !== 200 && status !== 204) {
                const _responseText_1 = yield response.text();
                return throwException("An unexpected server error occurred.", status, _responseText_1, _headers);
            }
            return Promise.resolve(null);
        });
    }
}
class AuthenticateUtilisateur {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.email = _data["email"];
            this.motDePasse = _data["motDePasse"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateUtilisateur();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["email"] = this.email;
        data["motDePasse"] = this.motDePasse;
        return data;
    }
}
class AuthenticationResponse {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.token = _data["token"];
            this.refreshToken = _data["refreshToken"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticationResponse();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["refreshToken"] = this.refreshToken;
        return data;
    }
}
class CreateMovies {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.deck = _data["deck"];
            this.description = _data["description"];
            this.image = _data["image"];
            this.name = _data["name"];
            this.release_date = _data["release_date"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateMovies();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["deck"] = this.deck;
        data["description"] = this.description;
        data["image"] = this.image;
        data["name"] = this.name;
        data["release_date"] = this.release_date;
        return data;
    }
}
class CreateMoviesAndPublisher {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.deck = _data["deck"];
            this.description = _data["description"];
            this.image = _data["image"];
            this.name = _data["name"];
            this.release_date = _data["release_date"];
            this.publisher = _data["publisher"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateMoviesAndPublisher();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["deck"] = this.deck;
        data["description"] = this.description;
        data["image"] = this.image;
        data["name"] = this.name;
        data["release_date"] = this.release_date;
        data["publisher"] = this.publisher;
        return data;
    }
}
class CreatePublishers {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.name = _data["name"];
            this.image = _data["image"];
            this.deck = _data["deck"];
            this.description = _data["description"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePublishers();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["image"] = this.image;
        data["deck"] = this.deck;
        data["description"] = this.description;
        return data;
    }
}
class CreateUtilisateur {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.nom = _data["nom"];
            this.prenom = _data["prenom"];
            this.email = _data["email"];
            this.motDePasse = _data["motDePasse"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateUtilisateur();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["nom"] = this.nom;
        data["prenom"] = this.prenom;
        data["email"] = this.email;
        data["motDePasse"] = this.motDePasse;
        return data;
    }
}
class CreateUtilisateur_Publisher {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.utilisateur_id = _data["utilisateur_id"];
            this.publisher_id = _data["publisher_id"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CreateUtilisateur_Publisher();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["utilisateur_id"] = this.utilisateur_id;
        data["publisher_id"] = this.publisher_id;
        return data;
    }
}
class Movies {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.deck = _data["deck"];
            this.description = _data["description"];
            this.image = _data["image"];
            this.name = _data["name"];
            this.release_date = _data["release_date"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Movies();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["deck"] = this.deck;
        data["description"] = this.description;
        data["image"] = this.image;
        data["name"] = this.name;
        data["release_date"] = this.release_date;
        return data;
    }
}
class Notifications {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.utilisateur_id = _data["utilisateur_id"];
            this.movie_id = _data["movie_id"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Notifications();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["utilisateur_id"] = this.utilisateur_id;
        data["movie_id"] = this.movie_id;
        return data;
    }
}
class Pages {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.nb_Pages = _data["nb_Pages"];
            this.nb_Items = _data["nb_Items"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Pages();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["nb_Pages"] = this.nb_Pages;
        data["nb_Items"] = this.nb_Items;
        return data;
    }
}
class PaginationMovie {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.pages = _data["pages"] ? Pages.fromJS(_data["pages"]) : undefined;
            if (Array.isArray(_data["movies"])) {
                this.movies = [];
                for (let item of _data["movies"])
                    this.movies.push(Movies.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new PaginationMovie();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["pages"] = this.pages ? this.pages.toJSON() : undefined;
        if (Array.isArray(this.movies)) {
            data["movies"] = [];
            for (let item of this.movies)
                data["movies"].push(item.toJSON());
        }
        return data;
    }
}
class PaginationPublisher {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.pages = _data["pages"] ? Pages.fromJS(_data["pages"]) : undefined;
            if (Array.isArray(_data["publishers"])) {
                this.publishers = [];
                for (let item of _data["publishers"])
                    this.publishers.push(Publishers.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new PaginationPublisher();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["pages"] = this.pages ? this.pages.toJSON() : undefined;
        if (Array.isArray(this.publishers)) {
            data["publishers"] = [];
            for (let item of this.publishers)
                data["publishers"].push(item.toJSON());
        }
        return data;
    }
}
class Publishers {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.image = _data["image"];
            this.deck = _data["deck"];
            this.description = _data["description"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Publishers();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["image"] = this.image;
        data["deck"] = this.deck;
        data["description"] = this.description;
        return data;
    }
}
class RefreshUtilisateur {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.refreshToken = _data["refreshToken"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new RefreshUtilisateur();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["refreshToken"] = this.refreshToken;
        return data;
    }
}
class Utilisateur {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.nom = _data["nom"];
            this.prenom = _data["prenom"];
            this.email = _data["email"];
            this.motDePasse = _data["motDePasse"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Utilisateur();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["nom"] = this.nom;
        data["prenom"] = this.prenom;
        data["email"] = this.email;
        data["motDePasse"] = this.motDePasse;
        return data;
    }
}
class Utilisateur_Publisher {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.utilisateur_id = _data["utilisateur_id"];
            this.publisher_id = _data["publisher_id"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new Utilisateur_Publisher();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["utilisateur_id"] = this.utilisateur_id;
        data["publisher_id"] = this.publisher_id;
        return data;
    }
}
class ApiException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isApiException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}


/***/ }),

/***/ "Ji2r":
/*!***************************************************************!*\
  !*** ./src/app/components/signinpage/signinpage.component.ts ***!
  \***************************************************************/
/*! exports provided: SigninpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninpageComponent", function() { return SigninpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SigninpageComponent {
    constructor(router, auth, formBuilder) {
        this.router = router;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.SignInForm = this.formBuilder.group({
            inputEmail: '',
            inputPassword: '',
            switchResterConnecte: false
        });
    }
    ngOnInit() {
        if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
            this.router.navigate(["movies", "0"]);
        }
    }
    login() {
        console.log("Email = " + this.SignInForm.value["inputEmail"]);
        console.log("Password = " + this.SignInForm.value["inputPassword"]);
        console.log("Rester connecté = " + this.SignInForm.value["switchResterConnecte"]);
        this.auth.login(this.SignInForm.value["inputEmail"], this.SignInForm.value["inputPassword"]);
        this.SignInForm.reset();
    }
}
SigninpageComponent.ɵfac = function SigninpageComponent_Factory(t) { return new (t || SigninpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
SigninpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninpageComponent, selectors: [["app-signinpage"]], decls: 35, vars: 1, consts: [[1, "container-fluid"], [1, "row"], ["id", "gauche-col", 1, "col-md-6", 2, "position", "relative"], [1, "display-1", 2, "border-radius", "20%", "padding", "5%", "background-color", "rgba(255, 255, 255, 0.5)", "width", "80%", "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50% ,-50%)"], [2, "color", "brown"], [1, "display-3"], [1, "lead", 2, "color", "brown", "font-weight", "900", "font-style", "italic", "font-size", "2rem"], ["id", "droit-col", 1, "col-md-6", "m-0", "p-0"], [1, "m-0", "p-0", 2, "background-color", "rgba(255, 255, 255, 0.5)", "height", "100%", "width", "100%", "position", "relative"], [1, "rounded", "p-3", 2, "background-color", "rgba(255, 255, 255, 0.8)", "width", "80%", "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50% ,-50%)", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "display-5"], ["for", "inputEmail", 1, "form-label"], ["type", "email", "id", "inputEmail", "formControlName", "inputEmail", "placeholder", "name@example.com", "required", "", 1, "form-control"], ["for", "inputPassword", 1, "form-label"], ["type", "password", "id", "inputPassword", "formControlName", "inputPassword", "placeholder", "**********", "required", "", 1, "form-control"], [1, "mb-3", "form-check", "form-switch"], ["type", "checkbox", "id", "switchResterConnecte", "formControlName", "switchResterConnecte", 1, "form-check-input"], ["for", "switchResterConnecte", 1, "form-check-label"], [1, "mb-3", "d-flex", "justify-content-between"], ["routerLink", "/signup", 1, "text-decoration-none"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SigninpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bienvenu sur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\"LE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " site web des comics ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Rejoins nous !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u201CI still believe in heroes.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninpageComponent_Template_form_ngSubmit_14_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Se connecter v5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rester connect\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cr\u00E9er un compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Suivant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SignInForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div#gauche-col[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\");\n      background-size: cover;\n    }\n    \n    div#droit-col[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n      background-position: right 0% bottom 0%;\n    }"] });


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PageNotFoundComponent {
    constructor() {
        this.x = "200 px";
        this.y = "200 px";
    }
    onMouseMove(e) {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], hostBindings: function PageNotFoundComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function PageNotFoundComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 10, vars: 0, consts: [["id", "body"], [1, "text"], [1, "pt-2"], [1, "pt-3"], ["type", "button", "routerLink", "/movies", 1, "btn", "btn-primary", "w-100"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Uh, Ohh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page introuvable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Revenir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["div#body[_ngcontent-%COMP%]{\n      height: 100vh;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size: cover;  \n      overflow: hidden;\n      \n      display: flex;\n      flex-flow: column wrap;\n      justify-content: center;\n      align-items: center;\n    }\n    .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n      color: #011718;\n      margin-top: -200px;\n      font-size: 15em;\n      text-align: center;\n      text-shadow: -5px 5px 0px rgba(0,0,0,0.7), -10px 10px 0px rgba(0,0,0,0.4), -15px 15px 0px rgba(0,0,0,0.2);\n      font-family: monospace;\n      font-weight: bold;\n    }\n    \n    .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n      color: black;\n      font-size: 5em;\n      text-shadow: -5px 5px 0px rgba(0,0,0,0.7);\n      text-align: center;\n      margin-top: -150px;\n      font-family: monospace;\n      font-weight: bold;\n    }\n    .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n      color: white;\n      margin-left: 30px;\n      font-size: 2em;\n      text-shadow: -5px 5px 0px rgba(0,0,0,0.7);\n      margin-top: -40px;\n      font-family: monospace;\n      font-weight: bold;\n    }\n    .torch[_ngcontent-%COMP%] {\n      margin: -150px 0 0 -150px;\n      box-shadow: 0 0 0 9999em #000000f7;\n      opacity: 1;\n      border-radius: 50%;\n      position: fixed;\n      background: rgba(0,0,0,0.3);\n      \n      &:after {\n        content: '';\n        display: block;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        top: 0px;\n        left: 0px;\n        box-shadow: inset 0 0 40px 2px #000,\n          0 0 20px 4px rgba(13,13,10,0.2);  \n      }\n    }"] });


/***/ }),

/***/ "Mqey":
/*!***************************************************************!*\
  !*** ./src/app/components/publishers/publishers.component.ts ***!
  \***************************************************************/
/*! exports provided: PublishersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishersComponent", function() { return PublishersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ "D8Mh");


class PublishersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublishersComponent.ɵfac = function PublishersComponent_Factory(t) { return new (t || PublishersComponent)(); };
PublishersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublishersComponent, selectors: [["app-publishers"]], decls: 31, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-danger", "float-right"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "page-link"], [1, "page-item"], ["href", "#", 1, "page-link"]], template: function PublishersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TITRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sous Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RS6x":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboardpage/settings/settings.component.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-nav/dashboard-nav.component */ "gXHc");


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 3, vars: 0, consts: [[2, "padding-left", "280px"], ["id", "content", 1, "w-100", 2, "position", "fixed", "background-color", "aqua"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__["DashboardNavComponent"]], styles: ["div#content[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n    }"] });


/***/ }),

/***/ "Rdf6":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ "D8Mh");


class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-danger", "float-right"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TITRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sous Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], encapsulation: 2 });


/***/ }),

/***/ "SNNK":
/*!*************************************************************!*\
  !*** ./src/app/components/adminpage/adminpage.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminpageComponent.ɵfac = function AdminpageComponent_Factory(t) { return new (t || AdminpageComponent)(); };
AdminpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminpageComponent, selectors: [["app-adminpage"]], decls: 19, vars: 0, consts: [[1, "container-fluid"], [1, "row"], ["id", "droit-col", 1, "col", "m-0", "p-0"], [1, "m-0", "p-0", 2, "background-color", "rgba(255, 255, 255, 0.5)", "height", "100%", "width", "100%", "position", "relative"], [1, "rounded", "p-5", 2, "background-color", "rgba(255, 255, 255, 0.8)", "width", "90%", "max-width", "600px", "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50% ,-50%)"], [1, "fs-2", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 1 16 16", 1, "bi", "bi-people"], ["d", "M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"], [1, "mb-3"], ["for", "exampleInputLogin", 1, "form-label"], ["type", "email", "id", "exampleInputLogin", "placeholder", "admin", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "**********", 1, "form-control"], ["type", "button", "routerLink", "dashboard", 1, "btn", "btn-primary", "float-end", "px-4"]], template: function AdminpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Suivant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["div#droit-col[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n    }"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XNGX":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboardpage/add/add.component.ts ***!
  \***************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-nav/dashboard-nav.component */ "gXHc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AddComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 68, vars: 0, consts: [[2, "padding-left", "280px"], ["id", "content", 1, "w-100", 2, "position", "fixed", "background-color", "aqua"], [1, "container", "clearfix", 2, "position", "absolute", "height", "100vh"], [1, "row", "clearfix", 2, "position", "relative", "min-height", "100%"], [1, "m-0", "p-0"], [1, "m-0", "p-0", 2, "height", "100%", "width", "100%", "position", "absolute", "overflow", "scroll"], [1, "rounded", "p-3", "row", 2, "background-color", "rgba(255, 255, 255, 0.75)", "width", "80%", "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50% ,-50%)"], [1, "mb-3"], [1, "display-5", "p-0", "m-0"], [1, "col-md-6"], ["for", "validationDefault01", 1, "form-label"], ["type", "text", "id", "validationDefault01", "placeholder", "Sylejmani", "required", "", 1, "form-control"], ["for", "validationDefault02", 1, "form-label"], ["type", "text", "id", "validationDefault02", "placeholder", "Visar", "required", "", 1, "form-control"], [1, "col-md-12"], ["for", "validationDefault05", 1, "form-label"], ["type", "text", "id", "validationDefault05", "placeholder", "name@example.com", "required", "", 1, "form-control"], ["for", "validationDefault03", 1, "form-label"], ["type", "password", "id", "validationDefault03", "placeholder", "***************", "required", "", 1, "form-control"], ["for", "validationDefault04", 1, "form-label"], ["type", "password", "id", "validationDefault04", "placeholder", "***************", "required", "", 1, "form-control"], [1, "form-check", "mt-2", "col-12"], ["type", "checkbox", "value", "hey", "id", "invalidCheck2", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], [1, "col-12", "d-flex", "justify-content-between", "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/home", 1, "text-decoration-none", "float-end"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ajouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirmez le mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Confirmez le mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " J'accepte les r\u00E9gles d'utilisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Suivant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "J'ai d\u00E9j\u00E0 un compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_1__["DashboardNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["div#content[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n    }"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/adminpage/adminpage.component */ "SNNK");
/* harmony import */ var _components_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signuppage/signuppage.component */ "nFM7");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_dashboardpage_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboardpage/home/home.component */ "1r+w");
/* harmony import */ var _components_dashboardpage_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboardpage/add/add.component */ "XNGX");
/* harmony import */ var _components_dashboardpage_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboardpage/settings/settings.component */ "RS6x");
/* harmony import */ var _components_dashboardpage_dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboardpage/dashboard-nav/dashboard-nav.component */ "gXHc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movies/movies.component */ "xVd8");
/* harmony import */ var _components_publishers_publishers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/publishers/publishers.component */ "Mqey");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "Rdf6");
/* harmony import */ var _components_signinpage_signinpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signinpage/signinpage.component */ "Ji2r");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
        _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_3__["AdminpageComponent"],
        _components_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_4__["SignuppageComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
        _components_dashboardpage_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_dashboardpage_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
        _components_dashboardpage_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
        _components_dashboardpage_dashboard_nav_dashboard_nav_component__WEBPACK_IMPORTED_MODULE_9__["DashboardNavComponent"],
        _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_13__["MoviesComponent"],
        _components_publishers_publishers_component__WEBPACK_IMPORTED_MODULE_14__["PublishersComponent"],
        _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsComponent"],
        _components_signinpage_signinpage_component__WEBPACK_IMPORTED_MODULE_16__["SigninpageComponent"],
        _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_17__["MovieComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "gXHc":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboardpage/dashboard-nav/dashboard-nav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DashboardNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNavComponent", function() { return DashboardNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class DashboardNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardNavComponent.ɵfac = function DashboardNavComponent_Factory(t) { return new (t || DashboardNavComponent)(); };
DashboardNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardNavComponent, selectors: [["app-dashboard-nav"]], decls: 17, vars: 0, consts: [[1, "position-fixed"], [1, "d-flex", "flex-column", "p-3", "text-white", "bg-dark", "clearfix", 2, "width", "280px", "height", "100vh", "min-height", "100%"], ["href", "/", 1, "d-flex", "align-items-center", "mb-3", "mb-md-0", "me-md-auto", "text-white", "text-decoration-none"], [1, "fs-4"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], [1, "nav-item"], ["routerLink", "/admin/home", "routerLinkActive", "active", 1, "nav-link", "text-white"], ["routerLink", "/admin/add", "routerLinkActive", "active", 1, "nav-link", "text-white"], ["routerLink", "/admin/settings", "routerLinkActive", "active", 1, "nav-link", "text-white"]], template: function DashboardNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bande dessin\u00E9e fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], encapsulation: 2 });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _classes_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/client */ "ISpL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(router) {
        this.router = router;
        this.client = new _classes_client__WEBPACK_IMPORTED_MODULE_2__["Client"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server);
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = new _classes_client__WEBPACK_IMPORTED_MODULE_2__["AuthenticateUtilisateur"]();
            data.email = email;
            data.motDePasse = password;
            var r = yield this.client.login(data);
            if (r.token != "undefined") {
                localStorage.setItem("token", r.token);
                localStorage.setItem("refreshToken", r.refreshToken);
                this.router.navigate(["/", "movies"]);
            }
        });
    }
    register(nom, prenom, email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = new _classes_client__WEBPACK_IMPORTED_MODULE_2__["CreateUtilisateur"]();
            data.nom = nom;
            data.prenom = prenom;
            data.email = email;
            data.motDePasse = password;
            var r = yield this.client.login(data);
            if (r.token != "undefined") {
                localStorage.setItem("token", r.token);
                localStorage.setItem("refreshToken", r.refreshToken);
                this.router.navigate(["/", "movies"]);
            }
        });
    }
    signout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            this.router.navigate(["/", "signin"]);
        });
    }
    isloggedin() {
        return localStorage.getItem("token").length > 20;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nFM7":
/*!***************************************************************!*\
  !*** ./src/app/components/signuppage/signuppage.component.ts ***!
  \***************************************************************/
/*! exports provided: SignuppageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignuppageComponent", function() { return SignuppageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




class SignuppageComponent {
    constructor(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.SignUpForm = this.formBuilder.group({
            inputNom: '',
            inputPrenom: '',
            inputEmail: '',
            inputPassword: '',
            inputConfirmPassword: '',
        });
    }
    ngOnInit() {
        if (localStorage.getItem("token") && localStorage.getItem("refreshToken")) {
            this.router.navigate(["movies", "0"]);
        }
    }
    signup() {
        if (this.SignUpForm.value["inputPassword"] == this.SignUpForm.value["inputPassword"]) {
            this.auth.register(this.SignUpForm.value["inputNom"], this.SignUpForm.value["inputPrenom"], this.SignUpForm.value["inputEmail"], this.SignUpForm.value["inputPassword"]);
            this.SignUpForm.reset();
        }
    }
}
SignuppageComponent.ɵfac = function SignuppageComponent_Factory(t) { return new (t || SignuppageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
SignuppageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignuppageComponent, selectors: [["app-signuppage"]], decls: 37, vars: 1, consts: [[1, "container-fluid"], [1, "row"], ["id", "droit-col", 1, "col", "m-0", "p-0"], [1, "m-0", "p-0", 2, "height", "100%", "width", "100%", "position", "relative"], [1, "rounded", "p-3", "row", 2, "background-color", "rgba(255, 255, 255, 0.75)", "width", "80%", "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50% ,-50%)", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "display-5", "p-0", "m-0"], [1, "col-md-6"], ["for", "inputNom", 1, "form-label"], ["type", "text", "id", "inputNom", "formControlName", "inputNom", "placeholder", "Sylejmani", "required", "", 1, "form-control"], ["for", "inputPrenom", 1, "form-label"], ["type", "text", "id", "inputPrenom", "formControlName", "inputPrenom", "placeholder", "Visar", "required", "", 1, "form-control"], [1, "col-md-12"], ["for", "inputEmail", 1, "form-label"], ["type", "text", "id", "inputEmail", "formControlName", "inputEmail", "placeholder", "name@example.com", "required", "", 1, "form-control"], ["for", "inputPassword", 1, "form-label"], ["type", "password", "id", "inputPassword", "formControlName", "inputPassword", "placeholder", "***************", "required", "", 1, "form-control"], ["for", "inputConfirmPassword", 1, "form-label"], ["type", "password", "id", "inputConfirmPassword", "formControlName", "inputConfirmPassword", "placeholder", "***************", "required", "", 1, "form-control"], [1, "form-check", "mt-2", "col-12"], ["type", "checkbox", "value", "hey", "id", "invalidCheck2", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], [1, "col-12", "d-flex", "justify-content-between", "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/signin", 1, "text-decoration-none", "float-end"]], template: function SignuppageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignuppageComponent_Template_form_ngSubmit_4_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "S'inscrire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Confirmez le mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " J'accepte les r\u00E9gles d'utilisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Suivant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "J'ai d\u00E9j\u00E0 un compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SignUpForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["div#droit-col[_ngcontent-%COMP%]{\n      min-height: 100vh;\n      overflow: auto;\n      background-image:url(\"https://images.pexels.com/photos/3744196/pexels-photo-3744196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n      background-size:cover;\n    }"] });


/***/ }),

/***/ "qO9b":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ "D8Mh");


class MovieComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-danger", "float-right"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sous Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], encapsulation: 2 });


/***/ }),

/***/ "sUQ5":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _classes_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/client */ "ISpL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MoviesService {
    constructor() {
        this.client = new _classes_client__WEBPACK_IMPORTED_MODULE_2__["Client"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server);
    }
    getPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.client.movieGetPage(page);
        });
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adminpage/adminpage.component */ "SNNK");
/* harmony import */ var _components_dashboardpage_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboardpage/home/home.component */ "1r+w");
/* harmony import */ var _components_dashboardpage_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboardpage/add/add.component */ "XNGX");
/* harmony import */ var _components_dashboardpage_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboardpage/settings/settings.component */ "RS6x");
/* harmony import */ var _components_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signuppage/signuppage.component */ "nFM7");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_signinpage_signinpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signinpage/signinpage.component */ "Ji2r");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/movies/movies.component */ "xVd8");
/* harmony import */ var _components_publishers_publishers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/publishers/publishers.component */ "Mqey");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "Rdf6");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");

//Admin Components




//Home Components

//Page Not Found Component








const routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: _components_signinpage_signinpage_component__WEBPACK_IMPORTED_MODULE_7__["SigninpageComponent"] },
    { path: 'signup', component: _components_signuppage_signuppage_component__WEBPACK_IMPORTED_MODULE_5__["SignuppageComponent"] },
    { path: 'publishers', component: _components_publishers_publishers_component__WEBPACK_IMPORTED_MODULE_9__["PublishersComponent"] },
    { path: 'notifications', component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__["NotificationsComponent"] },
    { path: 'movies/:id', component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"] },
    { path: 'movie/:id', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_11__["MovieComponent"] },
    {
        path: 'admin',
        component: _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_1__["AdminpageComponent"],
    },
    {
        path: 'admin/home',
        component: _components_dashboardpage_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'admin/add',
        component: _components_dashboardpage_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"],
    },
    {
        path: 'admin/settings',
        component: _components_dashboardpage_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
    },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xVd8":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "sUQ5");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav.component */ "D8Mh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MoviesComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.deck);
} }
function MoviesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviesComponent_div_5_div_1_Template, 10, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, movies_r1));
} }
class MoviesComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.moviesService.getPage(0).then(o => this.movies$ = o.movies);
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 7, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-6"], [1, "card"], [4, "ngIf"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "card-title"], ["width", "50px", "height", "50px", 2, "height", "100%", 3, "src"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], ["type", "button", 1, "btn", "btn-danger", "float-right"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoviesComponent_div_5_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx.movies$));
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map