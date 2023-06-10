import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
constructor(private http: HttpClient) { }
public name = new FormControl('');
public username = new FormControl('');
public password = new FormControl('');

public onSignUp(){
  var signUpData = {
    name:this.name.value,
    username:this.username.value,
    password:this.password.value
  };
  this.http.post("http://localhost:3000/signUpData", signUpData).subscribe(
    (res:any) =>{ 
        console.log(res)
      alert("Sign Up Success");
    },
    (err) => {
       console.log(err)
    },
  );
}

}
