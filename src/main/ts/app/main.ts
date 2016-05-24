import {bootstrap} from '@angular/platform-browser-dynamic'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {AppComponent} from './core/index'
import {provide, Injectable, enableProdMode} from '@angular/core'
import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common'
import { HTTP_PROVIDERS } from '@angular/http'

enableProdMode();

bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    HTTP_PROVIDERS
  ]
 );
