import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  private apiURL = 'https://jsonplaceholder.typicode.com/albums'; 
  
  constructor(private client: HttpClient) { }
  
  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(this.apiURL) 
  }
  getAlbum(id : number): Observable<Album>{
    return this.client.get<Album>(`${this.apiURL}/${id}`);
  }
  updateAlbum(album : Album) : Observable<Album>{
    return this.client.put<Album>(`${this.apiURL}/${album.id}`, album); 
  }
  deleteAlbum(id : number) : Observable<any>{
    return this.client.delete(`${this.apiURL}/${id}`)
  }
  getAlbumPhotos(albumId : number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.apiURL}/${albumId}/photos`); 
  }
} 
