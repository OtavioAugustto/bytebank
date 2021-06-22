import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtractComponent },
  { path: 'new-transfer', component: NewTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
