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

   changeLocation(oldLocation: string): string {
      let locations = ['center', 'right', 'left'];
      let newLocation = oldLocation;
      while(newLocation === oldLocation) {
         newLocation = locations[Math.floor(Math.random())*locations.length];
      }
      return newLocation;
   }

}
