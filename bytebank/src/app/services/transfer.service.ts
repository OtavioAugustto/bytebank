import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listaTranferencia: any[];

  constructor() {
    this.listaTranferencia = [];
  }

  get transferencias(): any{
    return this.listaTranferencia;
  }

  addTransfer(transferencia: any): void{
    this.transferData (transferencia);
    this.listaTranferencia.push(transferencia);
  }

  private transferData(transferencia: any): void{
    transferencia.data = new Date();
  }
}
