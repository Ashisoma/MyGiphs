import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getMyGifs(){
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&limit=25&rating=g`)
}

}
//