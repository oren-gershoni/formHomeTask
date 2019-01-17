import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {RegexService} from '../regex.service';
import { MatDialog} from '@angular/material';
import {FormCompleteDialogComponent} from '../form-complete-dialog/form-complete-dialog.component';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {
  regForm:FormGroup;
  firstName:FormControl;
  lastName:FormControl;
  address:FormControl;
  telephone:FormControl;
  @ViewChild('regFormGD') regFormGD:FormGroupDirective ;


  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.firstName = new FormControl(null,[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
      Validators.pattern(RegexService.ENGLISH_NAME_REGEX)
    ]);

    this.lastName = new FormControl(null,[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
      Validators.pattern(RegexService.ENGLISH_NAME_REGEX)
    ]);

    this.address = new FormControl(null, [
      Validators.minLength(2),
      Validators.maxLength(50)
    ]);

    this.telephone = new FormControl(null,[
      Validators.required,
      Validators.pattern(RegexService.ISRAEL_PHONE_REGEX) // Phone regex are usually a headache, you should leave it to a library but for this demo i used something simple.
    ]);


    this.regForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      telephone: this.telephone,
    });
  }

  onSubmit() {

    if(this.regForm.valid)
    {
      this.dialog.open(FormCompleteDialogComponent);
      this.regFormGD.resetForm();
    }

  }
}
