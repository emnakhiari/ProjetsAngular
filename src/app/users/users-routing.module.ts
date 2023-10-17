import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponentComponent } from '../main-user-component/main-user-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component';

const routes: Routes = [
  {path : 'UserManagment' , component : MainUserComponentComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
