import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  addBooks(data:any){
    return this.http.post("http://localhost:3000/books",data);
  }
  updateBooks(book:any){
    return this.http.patch("http://localhost:3000/books/"+book.id,book);
  }
  deleteBooks(index:any){
    return this.http.delete("http://localhost:3000/books/"+index);
  }
}
