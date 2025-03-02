import { Album } from "./models";

export const ALBUMS : Album[] = []; 

for( let i : number = 1 ; i <= 10 ; i ++){
    ALBUMS.push(
        {
            id : i , 
            title : `Title : Album ${i}`,  
        }
    )
}