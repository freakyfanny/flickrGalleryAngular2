import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , FormControl,FormGroup} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { FlickrService } from './services/flickr.service';
import {HeaderComponent} from './components/app.header.component';
import {PhotoComponent} from './components/app.photo.component';
import {AppComponent} from './components/app.component';
import 'rxjs/Rx';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PhotoComponent
    ],
    providers: [
        FlickrService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
