
import { Component } from '@angular/core';
import { BookDetailsService } from '../book-details.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  booksArray:any=[];
  isShowDescription:any=[];
  constructor(private serv:BookDetailsService){
    this.serv.getBooks().subscribe(book=>{
      this.booksArray=book;
      for(var i=0;i<this.booksArray.length;i++){
        this.isShowDescription[i]=false;
      }
    })
  }

  showDescription(index:any){

    if(this.isShowDescription[index]==true){
      this.isShowDescription[index]=false;
    }else{
      this.isShowDescription[index]=true;
    }


  }
}
