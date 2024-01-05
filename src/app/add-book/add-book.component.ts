import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDetailsService } from '../book-details.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  bookform:FormGroup;
  image:any="";
  book:any;
  books:any=[];
  isShowupdate:boolean=false;
  constructor(private serv:BookDetailsService, private builder:FormBuilder, private router:Router){
    this.bookform=builder.group({
      name:['',[Validators.required]],
      image:['',[Validators.required]],
      description:['',[Validators.required]]
    })
    this.serv.getBooks().subscribe((book)=>{
      this.books=book;
    })
  }

  selectedImage(event:any){
    const file = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }
  readFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {

      this.image=e.target.result;
    };

    reader.readAsDataURL(file);
  }
  showUpdate(){
    if(this.isShowupdate==true){
      this.isShowupdate=false;
    }
    else{
      this.isShowupdate=true;
  }
  }

  bookDetails(details:any){
    this.book={
      id:this.books.length+1,
      name:details.name,
      image:this.image,
      description:details.description
    }
    this.serv.addBooks(this.book).subscribe(()=>{
      alert("Book Added Successfully");
      this.router.navigateByUrl("");
    })
  }
}
