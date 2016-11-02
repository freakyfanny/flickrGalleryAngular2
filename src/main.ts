import {platformBrowserDynamic}    from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

require('./scss/main.scss');
require('./scss/ie/main.ie.scss');

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
