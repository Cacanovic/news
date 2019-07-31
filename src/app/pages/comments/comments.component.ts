import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PagesServicebaseService } from '../../shared/services/pages-servicebase.service';
import { CommentTreeModel } from '../../shared/models/comment-tree.model';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { StoryModel } from '../../shared/models/story.model';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pageService: PagesServicebaseService) { }

  commentsExists = true;
  selectedStory: StoryModel;
  commentsTree: CommentTreeModel[] = [];
  

  ngOnInit() {
    this.blockUI.start('');

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.pageService.getItemById(id)
        .then((result: StoryModel) => {
          this.selectedStory = result;
          if (this.selectedStory.kids) {
            this.commentsExists = true;
            return this.pageService.getAllComments(this.selectedStory);
          } else {
            this.commentsExists = false;
          }
        })
        .then((comments: CommentTreeModel[]) => {
          this.commentsTree = comments;
          this.blockUI.stop(); 
        })
        .catch(error => {
          this.blockUI.stop();
          console.log('Error: ', error);
        })


    });
  }


}
