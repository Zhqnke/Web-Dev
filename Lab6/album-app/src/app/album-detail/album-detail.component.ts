import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: false,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!:Album;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save() {
    this.albumsService.updateAlbum(this.album).subscribe(() => {
      alert('Saved!');
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

}
