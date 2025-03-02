import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-album-details',
  standalone : true , 
  imports: [RouterModule , CommonModule , FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album !: Album ; //Album Object 
  loaded : boolean ; 
  editTitle : string = ''; 
  isEditing : boolean = false; 
  //album !: Album | undefined ; 
  constructor(private route : ActivatedRoute,private albumsService: AlbumsService){
    this.loaded = false ; 
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      this.loaded = false ;
      const albumId = Number(params.get('id'))
      this.albumsService.getAlbum(albumId).subscribe((album : Album) => {
        this.album = album ;
        this.loaded = true;  
        this.editTitle = album.title ;
      })
        // this.album = ALBUMS.find(album=>album.id === albumId) as Album; 
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing; 
    if(this.isEditing){
      this.editTitle = this.album.title ; 
    }
  }

  saveTitle(){
    if(this.editTitle !== this.album.title){
      const updatedAlbum = {
        ...this.album , 
        title : this.editTitle
      }; 

      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: (response) => {
          this.album = response; 
          this.isEditing = false; 
        }
      });
    } else{
      this.isEditing = false ;
    }
  }
}
