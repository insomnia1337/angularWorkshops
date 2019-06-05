import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './containers/workers/workers.component';
import { ItemsComponent } from './containers/items/items.component';
import { RegisterComponent } from './containers/register/register.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
