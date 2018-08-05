import { Component } from '@angular/core';
import { ClienteService } from '../../../providers/cliente.service';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import swal from 'sweetalert';
import { ClienteViewComponent } from '../cliente-view/cliente-view.component';



@Component({
  selector: 'cliente-list',
  styleUrls: ['./cliente-list.component.scss'],
  templateUrl: './cliente-list.component.html',
})
export class ClienteListComponent {

  public cliente: any = [];

  constructor(
    private clienteService: ClienteService,
    private service: SmartTableService
  ) { 
    // Jeferson Oliveira
    // const data = this.service.getData();
    // this.source.load(data);
  }

  public ngOnInit() {
    this.clienteService.getClientes().subscribe(
      response => {
        // this.cliente = response.data;
        this.source.load(response['data'].data);
        console.log(response['data'].data);
      }
    );
  }

  settings = {
    button: {
      title: 'Button',
      type: 'custom',
      renderComponent: ClienteViewComponent,
      onComponentInitFunction(instance) {
        instance.save.subscribe(row => {
          alert(`${row.name} saved!`)
        });
      }
    },
    actions: {  
      columnTitle: 'Action',  
      add: true,  
      edit: false,  
      delete: false,  
      position: 'right'  
    },
    attr: {  
      class: 'table table-striped table-bordered table-hover'  
    },
    defaultStyle: false,
    pager: {  
      display: true,  
      perPage: 10  
    },
    columns: {
      'pessoa.pes_nome': {
        title: 'Nome Completo',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.pessoa.pes_nome },
      },
      'pessoa.pes_cpfcnpj': {
        title: 'CPF',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.pessoa.pes_cpfcnpj },
      },
      'pessoa.pes_email': {
        title: 'E-mail',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.pessoa.pes_email },
      },
      'pessoa.pes_fone': {
        title: 'Telefone',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.pessoa.pes_fone },
      },
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are voce sure you want to delete?')) {
      swal("Good job!", "You clicked the button!", "success");
    } else {
      swal("Good job!", "You clicked the button!", "error");
    }
  }

}

