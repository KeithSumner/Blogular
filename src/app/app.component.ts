import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public postService: PostService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  title = 'Blogular';

  ngOnInit()
  {
    console.log(this.postService.post);
  }
}
