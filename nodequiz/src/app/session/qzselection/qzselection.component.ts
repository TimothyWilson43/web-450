import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qzselection',
  templateUrl: './qzselection.component.html',
  styleUrls: ['./qzselection.component.css']
})
export class QzselectionComponent implements OnInit {

  section: any = [];
  quizzes: any;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/api/quiz').subscribe(data => {
      this.quizzes = data;
      console.log(this.quizzes);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {

    var coll = document.getElementsByClassName("openVideo");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}

