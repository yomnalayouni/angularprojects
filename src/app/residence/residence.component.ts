import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Appartement } from '../core/models/appartement';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}

    ];
    listApartments:Appartement[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1] }
    ];

    list:Appartement[]=[];
      showappartement(id:number){ 
         this.list=this.listApartments.filter((appart:Appartement)=>appart.residence.id==id);
        
       
      }
      selectedResidence: Residence | undefined;
      filteredApartments: Appartement[] = [];
      searchSurface: number | undefined;
      noApartments = false;
      favoriteApartments: Appartement[] = [];
    
      showApartments(id: number): void {
        const residence = this.listResidences.find(res => res.id === id);
        if (residence) {
          this.selectedResidence = residence;
          this.filteredApartments = this.listApartments.filter(apartment => apartment.residence.id === id);
          this.noApartments = this.filteredApartments.length === 0;
        }
      }
    
      addToFavorites(apartment: Appartement): void {
        const isAlreadyInFavorites = this.favoriteApartments.some(favApartment => favApartment.id === apartment.id);
    
        if (!isAlreadyInFavorites) {
          this.favoriteApartments.push(apartment);
        }
      }
    
      filterApartments(): void {
        if (this.selectedResidence && this.searchSurface !== undefined) {
          this.filteredApartments = this.listApartments.filter(apartment => {
            return apartment.residence.id === this.selectedResidence?.id && apartment.surface === this.searchSurface;
          });
        } else {
          this.filteredApartments = [];
        }
        this.noApartments = this.filteredApartments.length === 0;
      }
}


