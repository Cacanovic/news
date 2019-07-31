export class CommentModel {
  id: number;
  by: string;
  kids?: Array<number>;
  parent: number;
  text: string;
  time: number;
  type: string;
}
