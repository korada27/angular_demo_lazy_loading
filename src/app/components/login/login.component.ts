import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authenticationService : AuthenticationService,
  ) { }

  inputData;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFormSubmit(logindata) {
   this.inputData = {
     email:logindata.value.email,
     password:logindata.value.password
   }
   console.log(this.inputData);
   if(this.inputData.email=='admin@gmail.com' && this.inputData.password=='admin'){
     alert("Login As ADMIN...!");

     this.router.navigate(['lab']);

   }
   else if(this.inputData.email=='user@gmail.com' && this.inputData.password=='user'){
     alert("Login As USER..!")
   }
   else{
     alert('Wrong User Credentials')
   }
  }
}
