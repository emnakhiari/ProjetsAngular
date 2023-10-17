import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router  } from '@angular/router';
import { Invoice } from '../Model/Invoice';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent {
  id!:number;
  active!:boolean;
  montantFacture!:number;
  montantRemise!:number;
  dateFacture!:string;

  constructor( private activatedroute : ActivatedRoute , private router : Router) { }
  ngOnInit()
  {
    this.id = Number(this.activatedroute.snapshot.params["idFacture"]);
    this.active = Boolean(this.activatedroute.snapshot.params["active"]);
    
  
      
   // console.log(this.activatedroute.snapshot.queryParamMap.get("idFacture"));
   // this.idFacture=this.activatedroute.snapshot.paramMap.get("idFacture");
  }
  list : Invoice []=
    [
      {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021",
      active:true},
      {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020"
      ,active:false},
      {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020",
      active:false},
      {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020",
      active:true},
      ]

  change()
  {
    this.router.navigateByUrl("InvoiceManagement");
  }
  
}
