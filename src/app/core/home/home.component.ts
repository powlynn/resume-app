import { Component,
   OnInit,
   AfterViewInit,
   trigger,
   state,
   style,
   transition,
   animate } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('headerState', [
      state('notAppeared', style({
        opacity: '0.0',
        transform: 'translateX(1100px)'
      })),
      state('appeared', style({
        opacity: '1.0',
        transform: 'translateX(550px)'
      })),
      state('bounce', style({
        transform: 'translateX(540px)'
      })),
      transition('notAppeared => appeared', animate(250)),
      transition('notAppeared => bounce', animate(500))
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  state = 'notAppeared';

  constructor() { }

  ngOnInit()
  {
    this.state = 'notAppeared';
  }

  ngAfterViewInit()
  {
    this.state = 'appeared';
  }
}
