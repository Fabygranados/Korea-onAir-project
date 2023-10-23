import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Movie, Results } from '../models';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( private http: HttpClient) { }
  private url = 'https://api.themoviedb.org/3';
  private apiKey = '864c45bb0c62da46a41a48210b91d1ab';
  
  getDataDiscover(page: number): Observable<Results> {
     //nose si esto sea necesario
    return this.http.get<Results>(`${this.url}/tv/top_rated?api_key=${this.apiKey}&language=KR&page=${page}`);
  }
}
