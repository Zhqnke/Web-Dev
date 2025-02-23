import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
export const routes: Routes = [
    {
        path : '', 
        pathMatch : 'full', 
        loadComponent: () => {
            return import('./components/searching/searching.component').then((m)=>m.SearchingComponent)
        },
    }, 
    // {
    //     path :'cart', 
    //     loadComponent: () => {
    //         return import('./components/carts/carts.component').then((m)=>m.CartsComponent)
    //     },
    // }, 
    {
        path : 'details/:id', 
        component : DetailsComponent , 
        title : 'Details Page'
    }
];
