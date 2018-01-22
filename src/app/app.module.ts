import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments.service';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers.service';

// Define the routes
const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService, CommentsService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
