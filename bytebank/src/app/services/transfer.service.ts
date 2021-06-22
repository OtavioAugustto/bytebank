import { Transferencia } from './models/transfers.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listaTranferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTranferencia = [];
  }

  get transferencias(): any {
    return this.listaTranferencia;
  }

  allTransfers(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  addTransfer(transferencia: any): void {
    this.transferData(transferencia);
    this.listaTranferencia.push(transferencia);
  }

  private transferData(transferencia: any): void {
    transferencia.data = new Date();
  }
}
