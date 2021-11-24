import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'esqueci-senha',
    templateUrl: 'EsqueciSenha.component.html',
  })
  export class EsqueciSenhaDialog {
    constructor(
      public dialogRef: MatDialogRef<EsqueciSenhaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }