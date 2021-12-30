import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-dialog',
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.css'],
})
export class ConfirmarDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
