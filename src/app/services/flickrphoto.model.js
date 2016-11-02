"use strict";
var FlickrPhoto = (function () {
    function FlickrPhoto(id, server, farm, secret, title, owner) {
        this.id = id;
        this.server = server;
        this.farm = farm;
        this.secret = secret;
        this.title = title;
        this.owner = owner;
        this.url = "";
        this.url = 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '.jpg';
    }
    return FlickrPhoto;
}());
exports.FlickrPhoto = FlickrPhoto;
//# sourceMappingURL=flickrphoto.model.js.map