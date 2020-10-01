import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }
// api requeast for trending gifs
getMyGifs(){
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&limit=25&rating=g`)
  .subscribe((response:any )=>{
   this.gifs.next(response.data)
  });
}
//search gifs button
 findGifs(gifName : string){
  return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&q=&limit=25&offset=0&rating=g&lang=en`)
  .subscribe((response:any )=>{
    this.gifs.next(response.data)
   });
 }
 getGifs(){
   return this.gifs.asObservable();
 }
 //getmore gifs button
 reloadGifs(){
   return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&tag=&rating=g')
   .subscribe((response:any)=>{
    this.gifs.next(response.data)
   });
 }
}
//https://api.giphy.com/v1/gifs/search?api_key=v6AIPullMVVn049JpeH0xQoHTuJReOHJ&q=&limit=25&offset=0&rating=g&lang=en