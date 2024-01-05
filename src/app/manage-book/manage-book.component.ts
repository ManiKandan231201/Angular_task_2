import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDetailsService } from '../book-details.service';

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.css'
})
export class ManageBookComponent {
  booksArray:any=[];
  isShowDescription:any=[];
  bookform:any;
  image:any="";
  book:any;
  isShowupdate:boolean=false;
  index=0;
  constructor(private serv:BookDetailsService, private builder:FormBuilder, private router:Router){
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
  showUpdate(index:any){
    if(this.isShowupdate==true){
      this.isShowupdate=false;
    }
    else{
      this.isShowupdate=true;
      this.bookform=this.builder.group({
        name:[this.booksArray[index].name,[Validators.required]],
        image:[""],
        description:[this.booksArray[index].description,[Validators.required]]
      })
      this.image=this.booksArray[index].image;
      this.index=index;
    }
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




UpdateDetails(book:any){
  const updatedbook={
    id:this.index+1,
    name:book.name,
    image:this.image,
    description:book.description
  }
  this.serv.updateBooks(updatedbook).subscribe(()=>{
    alert('Updated Successfully');
    this.router.navigateByUrl("");
  })
}

deleteBook(index:any){
this.serv.deleteBooks(index+1).subscribe(()=>{
alert("deleted a book successfully");
this.router.navigateByUrl("");
})
}

}
