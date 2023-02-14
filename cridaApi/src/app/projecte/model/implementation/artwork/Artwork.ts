export class Artwork {
    titol!: string;
    id!: number;
    imatge!: string;
    autor!: number;

    constructor(obra:any){
        this.titol = obra.title;
        this.id = obra.id;
        this.imatge = obra.image_id;
        this.autor = obra.artist_id;
    }

}