import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {AppComponent} from './core/index'
import {provide} from 'angular2/core'
import {APP_BASE_HREF} from 'angular2/platform/common'
import { HTTP_PROVIDERS } from 'angular2/http'
import { enableProdMode } from 'angular2/core'

enableProdMode();


bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue : '/' }),
    HTTP_PROVIDERS
  ]);
