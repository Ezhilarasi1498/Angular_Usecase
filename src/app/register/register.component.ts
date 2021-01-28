import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { FormBuilder, FormGroup,Validators  } from "@angular/forms";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private userDataService:UserDataService
    
  ) {
    
  }

  
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.signupForm.controls; }
  submitRegisterForm(){
    this.submitted = true;

    this.userDataService.register(this.signupForm.value)
    .subscribe({
                next: () => {
                  this.router.navigateByUrl('/login'); 
                }
              });
  }

}
