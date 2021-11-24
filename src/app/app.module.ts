import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { CriarContaDialog } from 'src/components/CriarContaComponent/CriarConta.component';
import { EsqueciSenhaDialog } from 'src/components/EsqueciSenhaComponent/EsqueciSenha.component';
import { AlteracaoSenhaComponent } from 'src/pages/AlteracaoSenha/AlteracaoSenha.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    EsqueciSenhaDialog,
    CriarContaDialog,
    AlteracaoSenhaComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
