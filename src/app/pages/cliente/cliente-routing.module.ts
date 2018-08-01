import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [{
    path: 'form',
    component: ClienteFormComponent,
  }, {
    path: 'list',
    component: ClienteListComponent,
  }, {
    path: 'view',
    component: ClienteViewComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ClienteRoutingModule {

}

export const routedComponents = [
  ClienteComponent,
  ClienteViewComponent,
  ClienteFormComponent,
  ClienteListComponent,
];
