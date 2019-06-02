import { Component } from '@angular/core';
import { SharedService } from "./sharedService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countryRule';
  
  
  objectArray;
  searchFlag:boolean = true;
  insertFlag:boolean = false;
  updateFlag:boolean = false;

  userObject = {
    userRule : '',
    userCountry : ''
  }

  insertUserObject = {
    userDate: '',
    userCountry : '',
    userRule : '',
    userUpdate : '',
    userReference : ''    
  }


  constructor(private _sharedService : SharedService){

  }

  search(){
    this.insertFlag = false;
    this.updateFlag = false;
    this.searchFlag = true;
  }
  
  insert(){
    this.searchFlag = false;
    this.updateFlag = false;
    this.insertFlag = true;    
  }

  update(){    
    this.insertFlag = false;    
    this.searchFlag = false;
    this.updateFlag = true;
  }

  getInfo(){
    var that = this;

    var data = {
      userRule : this.userObject.userRule,
      userCountry : this.userObject.userCountry,
    }
    console.log("get data is ",data);

    this._sharedService.getTableData(data).subscribe(function(objectResult){

        that.objectArray = objectResult;
        console.log("objectArray is ",that.objectArray);


      })
  }

  insertInfo(){
    // let dateFormat = require('dateformat');
    // dateFormat(this.todayDate, "dddd, mmmm dS, yyyy");
 
    var that = this;
    // var listOfEntry = []
    var data = {
      userRule : this.insertUserObject.userRule,
      userCountry : this.insertUserObject.userCountry,
      userUpdate : this.insertUserObject.userUpdate,
      userReference : this.insertUserObject.userReference
    }
    console.log("insert data is ",data);

    this._sharedService.insertTableData(data).subscribe(function(objectResult){
      that.objectArray = objectResult;
      console.log("objectArray is ",that.objectArray);
      // listOfEntry.push(that.objectArray);
      // console.log("listOfEntry is ",listOfEntry);
      
    })

  }





}
