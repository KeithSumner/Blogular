import { Component, OnInit, Type, ViewChild, Directive, Injector, ApplicationRef, EmbeddedViewRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PostService, ContentComponent } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    public postService: PostService, 
    private resolver: ComponentFactoryResolver,
    private viewRef: ViewContainerRef) 
    {

    this.postService.post.subscribe(p => {
      if(p && p.content){
        p.content.forEach(element => {
          const classT = postService.getClass(element.type);
          const factory = this.resolver.resolveComponentFactory(classT);
          let componentRef = viewRef.createComponent(factory);
          (<ContentComponent>componentRef.instance).data = element.data;

        });
      }
    })
   }

  ngOnInit() {
  }

}
