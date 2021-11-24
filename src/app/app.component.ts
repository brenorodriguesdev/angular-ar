import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CriarContaDialog } from 'src/components/CriarContaComponent/CriarConta.component';
import { EsqueciSenhaDialog } from 'src/components/EsqueciSenhaComponent/EsqueciSenha.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ar';

  loginForm: FormGroup = new FormGroup({
    cpf: new FormControl('', [Validators.pattern(/(\d{3})(\d{3})(\d{3})(\d{2})/), Validators.required]),
    senha: new FormControl('', Validators.required),
  });



  submit(event: any) {

    event.preventDefault();

    if (this.loginForm.valid) {
      console.log('xd')
    }

  }

  constructor(public dialog: MatDialog) { }

  openEsqueciSenhaDialog(): void {
    const dialogRef = this.dialog.open(EsqueciSenhaDialog, {
      width: '30rem',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openCriarContaDialog(): void {
    const dialogRef = this.dialog.open(CriarContaDialog, {
      width: '30rem',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
