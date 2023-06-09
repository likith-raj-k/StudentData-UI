import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view', component: ViewComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
