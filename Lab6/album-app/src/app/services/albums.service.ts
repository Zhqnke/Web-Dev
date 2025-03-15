import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private API_URL = 'https://jsonplaceholder.typicode.com/albums';
  private albums: Album[] = [];

  constructor(private http: HttpClient) {}

  // Загружаем альбомы из локального хранилища или API
  getAlbums(): Observable<Album[]> {
    const savedAlbums = localStorage.getItem('albums');
    if (savedAlbums) {
      this.albums = JSON.parse(savedAlbums);
      return of(this.albums);
    }

    return this.http.get<Album[]>(this.API_URL).pipe(
      map(albums => {
        this.albums = albums;
        localStorage.setItem('albums', JSON.stringify(this.albums)); // Сохраняем в localStorage
        return this.albums;
      })
    );
  }

  // getting альбом из локального массива
  getAlbum(id: number): Observable<Album> {
    const album = this.albums.find(a => a.id === id);
    return album ? of(album) : this.http.get<Album>(`${this.API_URL}/${id}`);
  }

  // updating альбом в localStorage
  updateAlbum(updatedAlbum: Album): Observable<Album> {
    const index = this.albums.findIndex(a => a.id === updatedAlbum.id);
    if (index !== -1) {
      this.albums[index] = updatedAlbum;
      localStorage.setItem('albums', JSON.stringify(this.albums)); 
    }
    return of(updatedAlbum);
  }

  // deleting альбом из localStorage
  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id);
    localStorage.setItem('albums', JSON.stringify(this.albums));
    return of();
  }

  // Получаем фото
  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}
