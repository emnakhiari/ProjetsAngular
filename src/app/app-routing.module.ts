import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';
import { MainProviderComponentComponent } from './main-provider-component/main-provider-component.component';
import { MainProductComponentComponent } from './main-product-component/main-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
// ng g m nomModule --routing --module=app 
const routes: Routes = [
{path : 'InvoiceManagement' ,component:  MainInvoiceComponentComponent  },
{path : 'listeInvoice' , component : InvoiceListComponentComponent},
{path : 'InvoiceDetail/:idFacture/:active' , component : InvoiceComponentComponent },

{path : 'ProviderManagment' , component : MainProviderComponentComponent},
{path : 'ProductManagment' , component : MainProductComponentComponent},
//pointage ne fait pas automatiquement 
{path : 'lazy',loadChildren:()=>import('../app/users/users.module').then((m)=>m.UsersModule)},
{path : '' , component : HomeComponentComponent},
{path : '**' , component : NotFoundPageComponentComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
