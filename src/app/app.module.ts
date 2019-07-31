import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpModule } from '@angular/http';

// Including HttpClientModule and making available in project
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BlockUIModule } from 'ng-block-ui';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { BestStoriesComponent } from './pages/best-stories/best-stories.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { NumberKPipe } from './shared/pipes/number-k.pipe';
import { CustomDatePipe } from './shared/pipes/custom-date.pipe';

import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { CommentsTreeComponent } from './pages/comments/comments-tree/comments-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TopStoriesComponent,
    BestStoriesComponent,
    CommentsComponent,
    NumberKPipe,
    CustomDatePipe,
    CommentsTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatIconModule,
    CdkTreeModule,
    MatTreeModule,
    BlockUIModule.forRoot(),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
