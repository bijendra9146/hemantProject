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
  userObject = {
    userRule : '',
    userCountry : ''
  }


  constructor(private _sharedService : SharedService){

  }

  getInfo(){
    var that = this;

    var data = {
      userRule : this.userObject.userRule,
      userCountry : this.userObject.userCountry,
    }
    console.log("data is ",data);

    this._sharedService.getTableData(data).subscribe(function(objectResult){

        that.objectArray = objectResult;
        console.log("objectArray is ",that.objectArray);


      })

  }





}
