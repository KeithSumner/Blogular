import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PostService } from './services/post.service';
import { ArchiveService } from './services/archive.service';
import { PostComponent } from './components/post/post.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { ImageComponent } from './components/image/image.component';


@NgModule({
  entryComponents: [
    TestComponentComponent,
    YoutubeComponent,
    ImageComponent,
    InstagramComponent
  ],
  declarations: [
    AppComponent,
    ArchiveComponent,
    PostComponent,
    TestComponentComponent,
    YoutubeComponent,
    InstagramComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService, 
    ArchiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
