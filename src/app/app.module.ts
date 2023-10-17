import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';
import { FormsModule } from '@angular/forms';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MainUserComponentComponent } from './main-user-component/main-user-component.component';
import { MainProductComponentComponent } from './main-product-component/main-product-component.component';
import { MainProviderComponentComponent } from './main-provider-component/main-provider-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitsComponentComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    MainProductComponentComponent,
    MainProviderComponentComponent,
    NotFoundPageComponentComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
