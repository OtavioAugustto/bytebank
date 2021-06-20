import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transfer($event): void {
    console.log($event);
    const transfer = {...$event, data: new Date()};
    this.transferencias.push(transfer);
  }
}
