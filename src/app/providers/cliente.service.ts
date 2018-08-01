import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8000/api/cliente';

  getClientes() {
    return this.http.get(this.baseUrl);
  }

  getClienteById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  createCliente(cliente: any) {
    return this.http.post(this.baseUrl, cliente);
  }

  updateCliente(cliente: any) {
    return this.http.put(this.baseUrl + '/' + cliente.id, cliente);
  }

  deleteCliente(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
