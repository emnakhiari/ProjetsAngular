import { Component } from '@angular/core';
import { User } from '../Model/User';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-main-user-component',
  templateUrl: './main-user-component.component.html',
  styleUrls: ['./main-user-component.component.css']
})
export class MainUserComponentComponent {

  constructor( private activatedroute : ActivatedRoute , private router : Router) { }

  ListUser : User [] =[
    {image:"../assets/user1.png",typeAccount:"Admin Account" , description:"An admin account has privileges ro manage service for other perople in the App"},
    {image:"../assets/user2.png",typeAccount:"Customer Account",description:"A Customer Account is a centralized place tp manage all billing information about customers"},
    {image:"../assets/user3.png",typeAccount:"Golden Account" , description:"All Golden members benefit from the features included with the Camrian Golden Account "},
    {image:"../assets/user4.png",typeAccount:"Blocked Account" ,description:"an account that does not allow for unlimites but instead has certain restriction"}
  ]

  change(typeAccount : any)
  {
     this.router.navigateByUrl(`UserManagment/category/${typeAccount}`);
  }

}
