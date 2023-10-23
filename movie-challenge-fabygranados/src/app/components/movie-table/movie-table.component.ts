import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/service/api.service';
import { Movie, Results } from 'src/app/models/movies.model';



@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
  @Input() movies: Movie[] | any;
  currentPage: number = 1;
  totalPages: number = 0;
  pageSize: number = 20;
  pages: number[] = [];
 
  

  constructor(private apiService: ApiService) {
  
  }
  ngOnInit(): void{
    this.getDataDiscover(this.currentPage);
  }
  public getDataDiscover(page: number){
      this.apiService.getDataDiscover(page).subscribe((data: Results) => {
        this.movies = data.results;
        this.currentPage = data.page;
        this.totalPages = data.total_results;
        console.log(data);

  });
}

 //Pagination
 onPageChange(event: PageEvent) {
  this.currentPage = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.getDataDiscover(this.currentPage);
 }
 getPagination(): number {
  if(this.movies.length === 0 || this.pageSize === 0){
    return 0;
  }
  return Math.ceil(this.movies.length / this.pageSize);
 }
}
