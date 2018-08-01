import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';

import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from '../../providers/cliente.service';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,

    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ClienteComponent,
    ClienteFormComponent,
    ClienteViewComponent,
    ClienteListComponent,
  ],
  providers: [
    ClienteService,
    SmartTableService,
  ],
})
export class ClienteModule { }
