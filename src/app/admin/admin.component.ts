import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/account-service.service';
import { AccountDetails } from 'src/app/Model/accountDetail';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  accounts:any=[];
  constructor(
    public accountService: AccountServiceService
  ) {
    this.accounts=this.accountService.getAccountProfile;
   }

  ngOnInit(): void {
  }

}
