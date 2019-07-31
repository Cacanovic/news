export class CommentTreeModel{
  id: number;
  by: string;
  kids?: CommentTreeModel[];
  parent: number;
  text: string;
  time: number;
  type: string;
}
