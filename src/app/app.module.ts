import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlickrService } from './services/flickr.service';
import {HttpModule, Http} from '@angular/http';

import {AppComponent} from './components/app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        FlickrService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
