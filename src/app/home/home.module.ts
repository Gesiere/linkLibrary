import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UserSearchPageModule, ComfirmableUserInputModule, UserDetailsPageModule , ComponentsModule as IonicNgUsersUIComponentsModule  } from 'ionic-ng-users-ui';



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
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
