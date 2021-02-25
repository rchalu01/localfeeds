import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from '@angular/fire'

import {IonicStorageModule} from '@ionic/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyA5M3SiENGyjS8ryv1VBIudX74jbLyyNsw",
    authDomain: "localfeeds-5efd7.firebaseapp.com",
    projectId: "localfeeds-5efd7",
    storageBucket: "localfeeds-5efd7.appspot.com",
    messagingSenderId: "1081422647180",
    appId: "1:1081422647180:web:41753de9735a634f8950a9"
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
