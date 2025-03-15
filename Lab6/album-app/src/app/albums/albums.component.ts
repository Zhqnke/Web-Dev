import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';


@Component({
  selector: 'app-albums',
  standalone: false,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums:Album[]=[];
  constructor(private albumsService: AlbumsService){}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data =>{
      this.albums = data;
    })
  }
  deleteAlbum(id: number){
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

}
