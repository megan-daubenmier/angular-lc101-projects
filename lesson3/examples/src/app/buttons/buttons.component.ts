import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   frustrationInactive: boolean = false;
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   changeLocation(oldLocation: string) {
      let locations = ['center', 'right', 'left'];
      while(this.location === oldLocation) {
         this.location = locations[(Math.floor(Math.random()))*locations.length];
         console.log(this.location);
      }
      return this.location;
   }

}
