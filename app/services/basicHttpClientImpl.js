"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var core_1 = require("@angular/core");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var BasicHttpClientImpl = (function () {
    function BasicHttpClientImpl(httpClient) {
        this.httpClient = httpClient;
        this.obj = 'test';
    }
    BasicHttpClientImpl.prototype.get = function (url) {
        return this.httpClient.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BasicHttpClientImpl.prototype.getOne = function (url) {
        return this.httpClient.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BasicHttpClientImpl.prototype.post = function (url, body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.httpClient.post(url, body, options) // ...using post request
            .map(this.extractData) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    };
    BasicHttpClientImpl.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BasicHttpClientImpl.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    BasicHttpClientImpl = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BasicHttpClientImpl);
    return BasicHttpClientImpl;
}());
exports.BasicHttpClientImpl = BasicHttpClientImpl;
//# sourceMappingURL=basicHttpClientImpl.js.map