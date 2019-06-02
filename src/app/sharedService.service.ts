import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators'



@Injectable()
export class SharedService {


  constructor(private _http : HttpClient){

  }
  getTableData(data){
   return  this._http.post("http://localhost:3000/users/getInfo",data).pipe(map(response => {
      {return response}
    }))
  }

  insertTableData(data){
console.log("serveice data is ",data);
    var header = new HttpHeaders({
      'Content-Type': 'application/json'
  });

    return  this._http.post("http://localhost:3000/users/insertInfo",data,{ headers: header}).pipe(map(response => {
      {return response}
    }))
  }


}
