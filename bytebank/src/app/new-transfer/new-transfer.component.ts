import { Transferencia } from './../services/models/transfers.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  constructor(private service: TransferService, private router: Router) {}
  @Output() withTranser = new EventEmitter<any>();
  valor: number;
  destino: number;

  ngOnInit(): void {}

  sendTransfer(): void {
    console.log('Solicitada nova transferência');
    const event: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.addTransfer(event)
    .subscribe((result) => {
      console.log(result);
      this.cleanInputs();
      this.router.navigateByUrl('extract');
    },
      (error) => console.error(error)
    );
  }

  cleanInputs(): void {
    this.valor = 0 ;
    this.destino = 0;
  }
}
