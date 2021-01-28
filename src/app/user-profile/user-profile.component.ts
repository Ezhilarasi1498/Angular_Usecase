import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/account-service.service';
import { AccountDetails } from 'src/app/Model/accountDetail';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  accounts:any =[];
  constructor(
    public accountService: AccountServiceService,
    private actRoute: ActivatedRoute
  ) { 
    
    this.accounts=this.accountService.getAccountProfile()
    
  }

  ngOnInit(): void {
  }

}
