import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { ManageBookComponent } from './manage-book/manage-book.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"Add",
    component:AddBookComponent
  },
  {
    path:"Manage",
    component:ManageBookComponent
  }
];
