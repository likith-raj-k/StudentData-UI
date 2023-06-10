import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router:Router) { }
  public login = true;
  public username = new FormControl('');
  public password= new FormControl('');

  public onLogin() {
    var loginData = {
      usernameValue:this.username.value,
      passwordValue:this.password.value
    };
  
    this.http.post("http://localhost:3000/loginpage", loginData).subscribe(
      (res:any) =>{ 
        if(res.response) {
          console.log(res)
        alert("Login success");
        this.router.navigate(['/dashboard']);
        this.login = false;
        } else {
          alert("Credential Not match!!")
          }
      },
  
      (err) => {
         console.log(err)
      },
    );
  }

  public onSignUp(){
    this.login = false;
    this.router.navigate(['/signup']);
  }
}
