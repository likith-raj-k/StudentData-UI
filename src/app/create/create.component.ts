import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent { 
  constructor(private http: HttpClient) { }
  public ngForm :any;
   public teacherForm = new FormGroup({
    tname:new FormControl(''),
    uniqueid:new FormControl(''),
    address:new FormControl(''),
    experience:new FormControl(''),
    contact:new FormControl(''),
    qualification:new FormControl(''),
    salary:new FormControl('')
   });


  public onSubmit():void {
    debugger;
    
    var formData = {
      // @ts-ignore: Object is possibly 'null'
      teachername: this.teacherForm.get('tname').value,
      // @ts-ignore: Object is possibly 'null'
      uniqueid:this.teacherForm.get('uniqueid').value,
       // @ts-ignore: Object is possibly 'null'
      address:this.teacherForm.get('address').value,
       // @ts-ignore: Object is possibly 'null'
      experience:this.teacherForm.get('experience').value,
       // @ts-ignore: Object is possibly 'null'
      contactno:this.teacherForm.get('contact').value,
       // @ts-ignore: Object is possibly 'null'
      qualification:this.teacherForm.get('qualification').value,
       // @ts-ignore: Object is possibly 'null'
      salary:this.teacherForm.get('salary').value,
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
