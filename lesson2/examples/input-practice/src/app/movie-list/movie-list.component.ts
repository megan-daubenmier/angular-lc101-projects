import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errorMsg = '';
      if(this.movies.includes(newTitle)) {
         errorMsg = 'Please input a movie that is not already on the list.';
      } else if (newTitle === '') {
         errorMsg = 'Please input a movie title.';
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
}