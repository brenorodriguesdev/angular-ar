import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'criar-conta',
    templateUrl: 'CriarConta.component.html',
  })
  export class CriarContaDialog {
    constructor(
      public dialogRef: MatDialogRef<CriarContaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }