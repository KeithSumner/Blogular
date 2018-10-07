import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestComponentComponent } from '../components/test-component/test-component.component';
import { BehaviorSubject } from 'rxjs';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { ImageComponent } from '../components/image/image.component';
import { InstagramComponent } from '../components/instagram/instagram.component';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postTypes = [];

  public post = new BehaviorSubject<IPost>(null);

  constructor(public http: HttpClient) {

    this.postTypes["TestComponent"] = TestComponentComponent;
    this.postTypes["Youtube"] = YoutubeComponent;
    this.postTypes["Image"] = ImageComponent;
    this.postTypes["Instagram"] = InstagramComponent;

    http.get<IPost>(environment.dataLocation + "content/posts/samplePost.json").subscribe(r => {
      this.post.next(r); 
    });
  }

  getClass(classType: string){
    console.log(classType);
    return this.postTypes[classType];
  } 
}

export interface ContentComponent {
  data: any;
}

export interface IPost {
  title: string;
  date: Date;
  content: IContent[];
}

export interface IContent
{
  type: string;
  data: any;
}