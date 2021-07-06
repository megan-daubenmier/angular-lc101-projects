import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  rightEnabled: boolean = true;
  leftEnabled: boolean = true;
  upEnabled: boolean = true;
  downEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you would like to abort this mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
    }
    rocketImage.style.bottom = '0px';
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width < 470000) {
      this.leftEnabled = true;
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (this.width >= 470000) {
      this.rightEnabled = false;
    }

    if (direction === 'left' && this.width > -20000) {
      this.rightEnabled = true;
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } 
    if (this.width <= -20000) {
      this.leftEnabled = false;
    }

    if (direction === 'up' && this.height < 340000) {
      this.downEnabled = true;
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (this.height >= 340000) {
      this.upEnabled = false;
    }

    if (direction === 'down' && this.height > 0) {
      this.upEnabled = true;
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } 
    if (this.height <= 0) {
      this.downEnabled = false;
    }

  }

  edgeCheck() {
    if(this.height > 320000 || this.height < 20000 || this.width < 0 || this.width > 450000) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }

}
