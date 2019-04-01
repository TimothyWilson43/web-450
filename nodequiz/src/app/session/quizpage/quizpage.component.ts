import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  question: any;
  text: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/quiz').subscribe(data => {
      this.text = data;
      console.log(this.question);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
