import { Component, OnInit } from '@angular/core';
import { FilmService } from './product-list.component.service';

@Component({
  selector: 'gcwinter-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filmes: any;
  filmService: FilmService;

  constructor(filmService: FilmService) {
    this.filmService = filmService;
  }

  ngOnInit(): void {

    this.filmes = this.filmService.getFilm().subscribe((filme => {
      this.filmes = filme;
      
  
      console.log(this.filmes);

    }))

  }


}
