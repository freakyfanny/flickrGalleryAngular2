import {Component, Input} from '@angular/core';
import { FlickrPhoto } from '../services/flickrphoto.model';

@Component({
    selector: 'photo',
    templateUrl:'./app.photo.component.html'
})


export class PhotoComponent {    
    @Input() photo : FlickrPhoto;
    
    constructor(){       
       
    }
    
}