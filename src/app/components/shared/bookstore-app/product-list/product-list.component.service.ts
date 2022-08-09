import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"


@Injectable()
export class FilmService {
    private apiKey = "ad0cd5743651e401ba58743dd1226f15"
    private url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apiKey
    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application / jason' })
    }
    constructor(private http: HttpClient) {

    }
    getFilm() {

        return this.http.get(this.url)

    }
}