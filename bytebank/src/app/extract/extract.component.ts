import { Transferencia } from './../services/models/transfers.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
