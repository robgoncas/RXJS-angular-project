import { Component, OnInit } from '@angular/core';
import {interval, timer} from 'rxjs';
import {tap, map, share} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

  constructor(){}

    public ngOnInit():void{

      //////////////////interval, timer rxjs functions//////////////////

      //Creates an Observable that emits sequential numbers every specified interval of time, on a specified
      const counter = interval(1000);
      counter.subscribe((n)=>{
        //this subscription is executed each 1000 miliseconds (1 second)
        console.log(n);
      })


      //Creates an observable that will wait for a specified time period, or exact date, before emitting the number 0.
      const tim = timer(2000);
      tim.subscribe((n)=>{
        //this subscription is executed after 2 second initializated the component
        console.log("timer execution");
      })


      ////////////////// share, map rxjs functions//////////////////

      const time = timer(1000);

      const obs = time.pipe(
        tap(()=> console.log("TAP ON")),
        map(()=> "END, TAP MAPPED")
      );

      const subs01 = obs.subscribe(val => console.log(val));
      const subs02 = obs.subscribe(val => console.log(val));

      // When you share the observables, the tap function
      //will be executed just one time.
      const shareObs = obs.pipe(share());

      const subs03 = obs.subscribe(val => console.log(val));
      const subs04 = obs.subscribe(val => console.log(val));

     }
}
