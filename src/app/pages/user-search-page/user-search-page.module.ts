import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSearchPagePageRoutingModule } from './user-search-page-routing.module';

import { UserSearchPagePage } from './user-search-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSearchPagePageRoutingModule
  ],
  declarations: [UserSearchPagePage]
})
export class UserSearchPagePageModule {}
