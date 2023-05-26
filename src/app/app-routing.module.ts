import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { StartComponent } from './components/start/start.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'test',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
