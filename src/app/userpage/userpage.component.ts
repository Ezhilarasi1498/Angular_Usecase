import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/users';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user: User;
  constructor(private userDataService: UserDataService) { 
    this.user=this.userDataService.userValue;
  }

  ngOnInit(): void {
  }

}
