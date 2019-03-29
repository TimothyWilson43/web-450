import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  errMessage: String;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null, Validators.compose([Validators.required])]
    });
  }

  signin() {
    const id = this.form.controls['id'].value;

    console.log('id');

    this.http.post('/api/user', {
      id: id
    }).subscribe(res => {
      console.log(res)
      if (res){
        this.router.navigate(['/session/qzselection'])
      }
      else{
        this.errMessage = 'Bad ID'
        this.router.navigate(['/session/signin'])
      }
    }, err => {
      console.log(err);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}