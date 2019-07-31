export class StoryModel {
  id: number;
  by: string;
  descendants: number;
  score: number;
  time: number;
  kids?: Array<number>;
  title: string;
  type: string;
  text: string;
}
