import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  quizId: String;
  quiz: any;

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) {
    this.quizId = this.route.snapshot.paramMap.get('id')
    this.http.get('/api/quizpage/' + this.quizId).subscribe(data => {
      this.quiz = data;
      console.log(this.quiz);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
