import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  public tname = '';
  public uniqueid = '';
  public address = '';
  public experience = 0;
  public contact = '';
  public qualification = '';
  public salary = 0;
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
  this.tname = updData.Name;
  this.uniqueid = updData.uniqueID;
  this.address = updData.Adress;
  this.experience = updData.Experience;
  this.contact = updData.ContactNo;
  this.qualification = updData.Qualification;
  this.salary = updData.Salary;
  this.id = id;
}


public updateValue() {
  var formData = {
    teachername:this.tname,
    address:this.address,
    uniqueid:this.uniqueid,
    experience:this.experience,
    contactno:this.contact,
    qualification:this.qualification,
    salary:this.salary
  };

  this.http.put("http://localhost:3000/teacherData/" + this.id, formData).subscribe(
    (res:any)=> {
      alert("Updated..");
      console.log(res);
      this.onView();
    },
    (err)=> console.log(err)
  );
}
 

}
