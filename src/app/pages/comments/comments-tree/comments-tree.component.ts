import { Component, Input } from '@angular/core';
import { CommentTreeModel } from '../../../shared/models/comment-tree.model';

@Component({
  selector: 'app-comments-tree',
  templateUrl: './comments-tree.component.html',
  styleUrls: ['./comments-tree.component.scss']
})
export class CommentsTreeComponent {

  constructor() { }

  isOpen: boolean = false;

  @Input() node: CommentTreeModel;
  
  expand() {
    this.isOpen = !this.isOpen;
  }
  
}
