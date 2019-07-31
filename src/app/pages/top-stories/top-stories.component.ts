import { Component, OnInit } from '@angular/core';
import { PagesServicebaseService } from '../../shared/services/pages-servicebase.service';
import { StoryModel } from '../../shared/models/story.model';

import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {

  constructor(private pageService: PagesServicebaseService) { }

  allStories: StoryModel[] = [];
  storiesToShow: StoryModel[] = [];
  @BlockUI() blockUI: NgBlockUI;
  pageLimit: number[] = [5, 10, 25, 50, 100];
  pageSize = 10;

  ngOnInit() {
    this.blockUI.start('');

    this.pageService.getAllNews('topstories')
      .then((stories: StoryModel[]) => {
        //filter empty news
        this.allStories = stories.filter(item => item);
        this.storiesToShow = this.allStories.slice(0, this.pageSize);
        this.blockUI.stop(); 
      })
      .catch(error => {
        this.blockUI.stop(); 
        console.log('Error: ', error);
      })
  }

  changePage(event) {
    let tempIndex = event.pageIndex * event.pageSize;
    this.storiesToShow = this.allStories.slice(tempIndex, tempIndex + event.pageSize);
  }
}
