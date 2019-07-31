import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { CommentModel } from '../models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class PagesServicebaseService {

  constructor(
    public http: HttpClient
  ) { }
  
  endpointBase = 'https://hacker-news.firebaseio.com/v0/';

  getAllNews(newsType) {
    return new Promise((resolve, reject) => {

      let allStories = [];
      let allStoriesObjects = [];
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append("Content-Type", "application/json");

      this.http.get(this.endpointBase + newsType + '.json', { headers: headers }).toPromise()
        .then((stories: any) => {
          allStories = stories;
          if (allStories.length) {
            let promises = [];
            let tempBr = allStories.length > 200 ? 200 : allStories.length;

            for (let i = 0; i < tempBr; i++) {
              promises.push(this.getItemById(allStories[i]));
            }
            resolve(Promise.all(promises));

          } else {
            resolve(allStoriesObjects);
          }
        })
        .catch(error => {
          console.log('Error: ', error)
        })
    })  
  }

  getAllComments(selectedStory) {
    let allComments: Array<CommentModel> = [];

    return new Promise((resolve, reject) => {

      let getComments = (element) => {
        this.getChildComments(element.kids)
          .then((comments: Array<CommentModel>) => {
            element.kids = comments;
            for (let i = 0; i < comments.length; i++) {
              if (comments[i].kids) {
                getComments(comments[i]);
              }
            }
          })
          .catch(error => {
            console.log(error);
          });        
      }

      if (selectedStory.kids) {
        this.getChildComments(selectedStory.kids)
          .then((firstParentComments: Array<CommentModel>) => {
            allComments = firstParentComments;
            for (let i = 0; i < allComments.length; i++) {
              if (allComments[i].kids) {
                getComments(allComments[i]);
              }
            }
            resolve(allComments);
          })
          .catch();
      } else {
        resolve(allComments);
      }
    });
  }


  getChildComments(children) {
    let allComments: Array<CommentModel> = [];
    return new Promise((resolve, reject) => {
      let promises = [];
      for (let i = 0; i < children.length; i++) {
        promises.push(this.getItemById(children[i]));
      }
      resolve(Promise.all(promises));
    });
  }
 
  /**
   * 
   * @param id of item 
   */
  getItemById(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get(this.endpointBase + 'item/' + id + '.json', { headers: headers }).toPromise();
  }

}
