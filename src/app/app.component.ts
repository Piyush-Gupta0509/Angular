import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Piyush Gupta'
  Greeting(){
    return 'Namaste!!'
  }
  getName(){
    alert('Function called')
  }
  getName2(surname:string){
    alert(surname)
  }
  Details(Fname:string,age:number){
    alert('Name is'+Fname+'  Age is'+age)
  }
}
