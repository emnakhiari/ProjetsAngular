import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MainUserComponentComponent } from '../main-user-component/main-user-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component';

// ce module est un sous- module de l'app module ( CommonModule utlise de Browser Module de module racine )
@NgModule({
  declarations: [
    MainUserComponentComponent,
    ListUserComponentComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
