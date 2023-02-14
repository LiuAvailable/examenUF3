export class Artist {
    name!: string;
    birth!: number;
    death!: number;

    constructor(artista:any){
        if(artista.sort_title == null) this.name = 'desconegut'
        else this.name = artista.sort_title;
        this.birth = artista.birth_date;
        this.death = artista.death_date;
    }
}