import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from "@angular/forms";
import { CORSInterceptor } from './utils/http-interceptor';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    RegisterComponent,
    SearchComponent,
    DataGridComponent,
    AuthComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CORSInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
