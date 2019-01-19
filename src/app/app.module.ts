import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';
import { FormCompleteDialogComponent } from './form-complete-dialog/form-complete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    FormCompleteDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FormCompleteDialogComponent]
})
export class AppModule { }
