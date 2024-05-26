import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   data = [
    {
      'username':'shahbukhtk@gmail.com',
      'password':'1234',
      'role':'admin'
    },{
      'username':'zaink@gmail.com',
      'password':'1234',
      'role':'user'
    }
  ];
  constructor(private router:Router){
  }

  loginForm = new FormGroup({
    userName:new FormControl('',[Validators.email]),
    password:new FormControl(''),
  });
  ngOnInit(): void {
  }
  getloginData() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    if(userName && password){
      this.data.forEach(element => {
        if(element.username == userName && element.password == password){
          localStorage.setItem("role",element.role);
          if(element.role == 'admin'){
            this.router.navigateByUrl("/admin")
            console.log("element.role",element.role)
          }else{
            this.router.navigateByUrl("/user-normal")
          }
        }
      });
    }else{
      alert("Please insert correct details");
    }
  
  }
}
