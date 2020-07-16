import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public newMessageForm: FormGroup;
  public name:string = "";
  public email:string = "";
  public message:string = "";
  public info:string = "";
  constructor() { 
    this.newMessageForm = this.createFormGroup();
  }

  ngOnInit() {
  }
  private createFormGroup() {
    //validation for form elements
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }
  public cancel() {
    //form reset
    this.newMessageForm.reset();
    this.email = "";
    this.name = "";
    this.message = "";
    this.info = "";
  }
  public submit() {
    this.name = this.newMessageForm.get('name').value;
    this.email = this.newMessageForm.get('email').value;
    this.message = this.newMessageForm.get('message').value;
    let sendstring = {
      "name": this.name,
      "email": this.email,
      "message": this.message
    }
    emailjs.init('user_sYQP0GqBDnKpADyjG6ORA');
    emailjs.send("gmail", "contact_template", sendstring);
    this.cancel();
    this.info = "Your message has been sent! Thank you!";
  }
}
