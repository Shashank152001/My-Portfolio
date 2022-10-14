import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  userName='Shashank Varshney'
  email='varshneyshashannk8846@gmail.com'
  mobile='+91 8094014707'
  linkedin='shashank-varshney-99'
  imageUrl:String="../assets/media/image1.jpeg"
  skill=['JavaScript','ReactJs','AngularJs','Nodejs','ExpressJs','MongoDB','PHP','Java','MySQL','CSS','HTML']
  education=[
    {
      college:['Swami Keshvanand Institute of Technology','Subodh Public School'],
      year:['2019-23','2018-19','2016-17'],
      marks:['9.14 CGPA','88.4%','9.40 CGPA',],
      course:['B.Tech','Senior Secondary','Secondary']
    }
  ]
  skills=[
    {
      frontend:['HTML','CSS','JavaScript','Bootstrap','React.js'],
      backend:['Node.js','Express,js','PHP'],
      programming:['C','C++','Java'],
      database:['MySQL','MongoDB'],
      lang:['Hindi(Mother Tangue)','English'],
      tools:['Visual Studio Code','Android Studio','Eclipse ID','Git','Postman','Windows']
    }
  ]
  projectLink1:String="https://github.com/Shashank152001/Food-Website"
  projectLink2:String="https://github.com/Shashank152001/eShop"
  projectLink3:String="https://github.com/Shashank152001/FreshVegitable"
}
