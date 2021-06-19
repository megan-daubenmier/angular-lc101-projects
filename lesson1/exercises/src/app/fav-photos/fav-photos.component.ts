import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Megan's Favorite Photos";
  // image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image1 = "https://media3.giphy.com/media/MREZajNc2bbkl3gIQv/200w.webp?cid=ecf05e47ub74fx1vr9db7umn6uaxisesdkuhp93xv7lbwsge&rid=200w.webp&ct=g";
  image2 = 'https://1.bp.blogspot.com/-irYA4Cxv-SY/UKi4PGZC58I/AAAAAAAABvE/CAZQmlcvQYc/s1600/Poodle_Puppy_Picture.jpg';
  image3 = 'http://images5.fanpop.com/image/photos/28100000/Cute-kitty-animal-cubs-28185372-1920-1200.jpg';

  constructor() { }

  ngOnInit() {
  }

}