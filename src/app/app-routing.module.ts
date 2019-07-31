import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { BestStoriesComponent } from './pages/best-stories/best-stories.component';
import { CommentsComponent } from './pages/comments/comments.component';


const routes: Routes = [
  { path: '', redirectTo: '/new-stories', pathMatch: 'full' },
  { path: 'new-stories', component: HomeComponent },
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'best-stories', component: BestStoriesComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: '**', redirectTo: '/new-stories' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
