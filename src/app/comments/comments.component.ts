import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  // instantiate posts to an empty array
  comments: any = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.commentsService.getAllComments().subscribe(comments => {
      this.comments = comments;
    });
  }
}
