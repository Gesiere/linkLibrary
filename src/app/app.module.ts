import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {UsersDataBrokerServiceToken} from 'ionic-ng-users-ui'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalUsersDataBrokerService } from './services/local-users-data-broker.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: UsersDataBrokerServiceToken, useClass: LocalUsersDataBrokerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
