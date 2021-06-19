import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  constructor() {}

  valor: number;
  destino: number;

  ngOnInit(): void {}

  sendTransfer(): void {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Valor: ', this.destino);
  }
}
