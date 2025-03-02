import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
    {
        path:'home' , component: HomeComponent, title : 'Home Page'
    },
    {
        path: '' , component : HomeComponent , title : 'Home Page'
    },
    {
        path:'about' , component : AboutComponent , title : 'About Us'
    },
    {
        path:'albums', component : AlbumsComponent , title : 'Albums'
    }, 
    {
        path:'albums/:id', component : AlbumDetailsComponent , title : 'Album detail page'
    },
    {
        path:'albums/:id/photos', component :AlbumPhotosComponent , title : 'Album photos'
    }
];
 