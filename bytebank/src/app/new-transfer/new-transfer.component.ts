import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  constructor() {}
  @Output() withTranser = new EventEmitter<any>();
  valor: number;
  destino: number;

  ngOnInit(): void {}

  sendTransfer(): void {
    console.log('Solicitada nova transferência');
    const event = {valor: this.valor , destino: this.destino};
    this.withTranser.emit(event);
    this.cleanInputs();
  }

  cleanInputs(): void{
    this.valor = 0;
    this.destino = 0;
  }
}
