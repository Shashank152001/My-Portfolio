import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  // education=[
  //   {
  //     college:['Swami Keshvanand Institute of Technology','Subodh Public School'],
  //     year:['2019-23','2018-19','2016-17'],
  //     marks:['9.14 CGPA','88.4%','9.40 CGPA',],
  //     course:['B.Tech','Senior Secondary','Secondary']
  //   }
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
