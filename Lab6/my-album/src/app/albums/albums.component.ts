import { Component, OnInit } from '@angular/core';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-albums',
  imports: [CommonModule , RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums !: Album[];
  loaded : boolean = false ; 

  constructor(private albumsService : AlbumsService) {
    //this.albums = ALBUMS; 
  }
  ngOnInit(){
    this.loaded = false ; 
    this.loadAlbums(); 
  }

  loadAlbums(){
    this.albumsService.getAlbums().subscribe((albums : Album[]) =>{
      this.albums = albums ;
      this.loaded = true; 
    })
  }
  deleteAlbum(id : number , event : Event){
    event.stopPropagation(); 

    this.albumsService.deleteAlbum(id).subscribe({
      next : () => {
        this.albums = this.albums.filter(album => album.id !== id); 
      }
    })
  }
}
