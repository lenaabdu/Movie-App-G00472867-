import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class movie {
 // API key from TMDb
  private apiKey = 'c2f3f72747a518faa102853f36dd4635';
 // Base URL for TMDb API
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
// Get today's trending movies
  getTrendingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }
  // Search movies
  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?query=${encodeURIComponent(query)}&api_key=${this.apiKey}`
    );
  }
   // Get details of a specific movie using its ID
  getMovieDetails(id: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }
  // Get cast and crew for a specific movie
  getMovieCredits(id: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }
   // Get details of a person (actor or crew member)
  getDetails(id: number) {
    return this.http.get(
      `${this.baseUrl}/person/${id}?api_key=${this.apiKey}`
    );
  }
  // Get movies that a person has acted in
  getDetailsMovies(id: number) {
    return this.http.get(
      `${this.baseUrl}/person/${id}/movie_credits?api_key=${this.apiKey}`
    );
  }
}