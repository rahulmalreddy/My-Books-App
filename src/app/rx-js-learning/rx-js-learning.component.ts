import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.css']
})
export class RxJSLearningComponent implements OnInit {

  agents: Observable<string> | undefined;
  agentName:string = "";
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function (observer) {
         try{
          observer.next('ram');
          setInterval(() =>{
            observer.next('mark');
          } ,2000);
          setInterval(() =>{
            observer.next('sita');
          } ,5000);
          
         }
         catch(e){
          observer.error(e);
         }
      }
    );

    this.agents.subscribe(data =>{
      this.agentName= data;
    })
  }



}
