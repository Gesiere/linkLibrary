import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UserSearchPageModule, ComfirmableUserInputModule, UserDetailsPageModule, ComponentsModule as IonicNgUsersUIComponentsModule } from 'ionic-ng-users-ui';

import { IonicNgPicturesUiModule } from 'ionic-ng-pictures-ui';
import { IonicNgSearchUiModule } from 'ionic-ng-search-ui';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    UserSearchPageModule,
    ComfirmableUserInputModule,
    UserDetailsPageModule,
    IonicNgUsersUIComponentsModule,
    IonicNgPicturesUiModule,
    IonicNgSearchUiModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
