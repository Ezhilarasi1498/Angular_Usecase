import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signinForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    public userDataService: UserDataService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    
  }
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  get f() { return this.signinForm.controls; }

  submitForm(){
    this.userDataService.login(this.f.username.value,this.f.password.value)
    .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userPage';
                    this.router.navigateByUrl(returnUrl);
                }
  
            });

}
}
