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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var flickrphoto_model_1 = require('./flickrphoto.model');
require('rxjs/Rx');
var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.flickrApiKey = '158f9fda1dd419dc28f2855346f605a3';
        this.maxPhotos = 30; //amount of photos to display on the webpage
    }
    ;
    FlickrService.prototype.getFlickrResult = function (query) {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.flickrApiKey + '&tags=' + query + '&format=json&nojsoncallback=1';
        console.log(url);
        this.flickrPhotos = []; //removes all photos in the array
        return this.getPhotos(url);
    };
    FlickrService.prototype.getFlickrFilterResult = function (query, color) {
        // maps colors to colorcode used in api call
        var colorMap = {
            'red': '0',
            'orange': '2',
            'yellow': '4',
            'green': '5',
            'blue': '8',
            'purple': '9',
            'black': 'e',
            'white': 'c'
        };
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.flickrApiKey + '&text=' + query + '&tags=' + color + '&color_codes=' + colorMap[color] + '&format=json&nojsoncallback=1';
        console.log(url);
        this.flickrPhotos = []; //removes all photos in the array
        return this.getPhotos(url);
    };
    FlickrService.prototype.getRecent = function () {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + this.flickrApiKey + '&format=json&nojsoncallback=1';
        console.log(url);
        this.flickrPhotos = []; //removes all photos in the array
        return this.getPhotos(url);
    };
    FlickrService.prototype.getPhotos = function (url) {
        var _this = this;
        this.http.get(url)
            .retry(4)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.photos.total <= 0) {
                return _this.flickrPhotos;
            }
            for (var i in data.photos.photo) {
                if (parseInt(i) > (_this.maxPhotos - 1)) {
                    break;
                }
                var flickrPhoto = data.photos.photo[i];
                //adds new photo object to photos array
                _this.flickrPhotos.push(new flickrphoto_model_1.FlickrPhoto(flickrPhoto.id, flickrPhoto.server, flickrPhoto.farm, flickrPhoto.secret, flickrPhoto.title, flickrPhoto.owner));
            }
        }, function (err) { console.log(err); });
        return this.flickrPhotos;
    };
    FlickrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlickrService);
    return FlickrService;
}());
exports.FlickrService = FlickrService;
//# sourceMappingURL=flickr.service.js.map