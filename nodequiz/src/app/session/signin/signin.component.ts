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

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null, Validators.compose([Validators.required])]
    });
  }

  signin() {
    const id = this.form.contains['id'].value;

    console.log('id');

    this.http.post('/api/user', {
      id: id
    }).subscribe(res => {
      this.router.navigate(['/'])
    }, err => {
      console.log(err);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}