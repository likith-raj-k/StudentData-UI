import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(private http: HttpClient) { }
  public teacherArray:any= [];
  public isClicked = false;
  public UpdateField = false;
  public dbLength:any;
  public updatePage = false;
  public ngForm :any;

  public tname = new FormControl('');
  public uniqueid = new FormControl('');
  public address =new FormControl('');
  public experience =new FormControl('');
  public contact = new FormControl('');
  public qualification =new FormControl('');
  public salary =new FormControl('');
  public id:any;

  public onView() {
    this.http.get("http://localhost:3000/teacherData").subscribe(
      (res:any) => {
        console.log(res);
        this.teacherArray = res["response"];
        if(this.teacherArray.length !== 0) {
          this.isClicked = true;
          this.dbLength = true; 
          this.UpdateField = true;
        }
        else {
          this.isClicked = false;
          this.dbLength = false; 
          this.UpdateField = false;
          alert("No data found!!");
        }
      },
      (err) => console.log(err)
    );
  }

public onDelete(id:Number) {
  this.http.delete("http://localhost:3000/teacherData/" + id).subscribe(
    (res:any)=> {
      console.log(res);
      this.onView();
    },
    (err)=> console.log(err)
  );
  
}

public onUpdate(id:Number){
  debugger;
  this.updatePage = true;
  var updData = this.teacherArray.find((val:any) => val.Tid === id);
  this.tname.setValue(updData.Name);
  this.uniqueid.setValue(updData.uniqueID);
  this.address.setValue(updData.Adress);
  this.experience.setValue(updData.Experience);
  this.contact.setValue(updData.ContactNo);
  this.qualification.setValue(updData.Qualification);
  this.salary.setValue(updData.Salary);
  this.id = id;
}


public updateValue() {
  var formData = {
    teachername:this.tname.value,
    address:this.address.value,
    uniqueid:this.uniqueid.value,
    experience:this.experience.value,
    contactno:this.contact.value,
    qualification:this.qualification.value,
    salary:this.salary.value
  };

  this.http.put("http://localhost:3000/teacherData/" + this.id, formData).subscribe(
    (res:any)=> {
      alert("Updated..");
      console.log(res);
      this.onView();
      this.updatePage = false;
    },
    (err)=> console.log(err)
  );
}
 

}
