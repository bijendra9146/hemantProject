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

}
