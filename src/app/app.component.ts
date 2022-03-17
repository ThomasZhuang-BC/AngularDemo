import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  outPut = '';
  addNumber:number=0;
  type :string = '';

  keyInNum(strNum:string){
    this.outPut+=strNum;
  }

  formula(type:string){
    if(this.outPut!==''){
       this.addNumber+parseInt(this.outPut,10);
    }

    this.outPut = '';
    this.type = type;


  }
}
