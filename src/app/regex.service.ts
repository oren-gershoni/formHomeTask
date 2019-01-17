import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  public static readonly ENGLISH_NAME_REGEX = /^[a-z'-]+$/i;
  public static readonly ISRAEL_PHONE_REGEX = /^((\+|00)?972-?|0)(([23489]|[57]\d)-?\d{7})$/;
  constructor() { }
}
