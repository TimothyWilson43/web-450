import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-qzselection',
  templateUrl: './qzselection.component.html',
  styleUrls: ['./qzselection.component.css']
})
export class QzselectionComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


Qzselection() {
  const quiz1 = this.form.contains['quiz1'].value;

  console.log('quiz1');

  this.http.post('/api/quizzes', {
    quiz1: quiz1
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