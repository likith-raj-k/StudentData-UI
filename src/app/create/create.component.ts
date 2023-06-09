import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent { 
  constructor(private http: HttpClient) { }
  public ngForm :any;
  public tname = '';
  public uniqueid = '';
  public address = '';
  public experience = 0;
  public contact = '';
  public qualification = '';
  public salary = 0;

  public onSubmit():void {
    debugger;
    var formData = {
      teachername:this.tname,
      uniqueid:this.uniqueid,
      address:this.address,
      experience:this.experience,
      contactno:this.contact,
      qualification:this.qualification,
      salary:this.salary
    };
    
    this.http.post("http://localhost:3000/teacherData", formData).subscribe(
        (res) =>{ 
          console.log(res)
          alert("Data submitted");
        },
        (err) => {
           console.log(err)
           alert("Fill all the fields")
        },
      );
      
  }

}
