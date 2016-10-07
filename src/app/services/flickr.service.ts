import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {FlickrPhoto} from './flickrphoto.model';
import 'rxjs/Rx';

@Injectable()
export class FlickrService {    
    flickrPhotos: Array<FlickrPhoto> = [];
    flickrApiKey : string = '158f9fda1dd419dc28f2855346f605a3';

    constructor(private http: Http) { };        
    
    getFlickrResult(query: string) : Array<FlickrPhoto> {
        // maps colors to colorcode used in api call
        /* var colorMap =
        {
          'red':'0',
          'orange':'2',
          'yellow':'4',
          'green':'5',
          'blue':'8',
          'purple':'9',
          'black':'e',
          'white':'c'
        }*/

        /*var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.API_KEY + '&tags=' + color + '&color_codes='+colorMap[color]+'&format=json&nojsoncallback=1';*/
        let url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.flickrApiKey + '&tags=' + query +'&format=json&nojsoncallback=1';
        console.log(url);
        
        var maxPhotos = 12;  //amount of photos to display on the webpage
        this.flickrPhotos = []; //removes all photos in the array
        
        this.http.get(url).map(res => res.json()).subscribe(
                    data => {
                        for(var i in data.photos.photo)
                        {
                          if (parseInt(i) > (maxPhotos - 1))  //-1 to account for i starting at 0
                          {
                            break;
                          }
                          var flickrPhoto = data.photos.photo[i];

                          //adds new photo object to photos array
                          this.flickrPhotos.push(new FlickrPhoto(flickrPhoto.id, flickrPhoto.server, flickrPhoto.farm, flickrPhoto.secret, flickrPhoto.title, flickrPhoto.owner));
                        }

                    },
                    err => {console.log (err)}
                    );

            return this.flickrPhotos;
    }
    
    getRecent() : Array<FlickrPhoto> {
        let url= 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + this.flickrApiKey + '&format=json&nojsoncallback=1';
        console.log(url);
        
        var maxPhotos = 12;  //amount of photos to display on the webpage
        this.flickrPhotos = []; //removes all photos in the array
        
        this.http.get(url).map(res => res.json()).subscribe(
                    data => {
                        for(var i in data.photos.photo)
                        {
                          if (parseInt(i) > (maxPhotos - 1))  //-1 to account for i starting at 0
                          {
                            break;
                          }
                          var flickrPhoto = data.photos.photo[i];

                          //adds new photo object to photos array
                          this.flickrPhotos.push(new FlickrPhoto(flickrPhoto.id, flickrPhoto.server, flickrPhoto.farm, flickrPhoto.secret, flickrPhoto.title, flickrPhoto.owner));
                        }

                    },
                    err => {console.log (err)}
                    );

            return this.flickrPhotos;
    }
    
    
}