import { Component } from '@angular/core';
import { Fournisseur } from '../Model/Fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
  list : Fournisseur[]=[
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ]
    
    getColor(code: string): string {
      return code.startsWith('2A') ? 'bold' : 'normal';
    }

    supprimer(s:any):void{
          // Supprimer le fournisseur de la liste
    const index = this.list.indexOf(s);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

}
