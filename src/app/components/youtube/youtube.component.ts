import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../../services/post.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit, ContentComponent {

  public videoKey: string;
  public data: YoutubeData;
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.data.videoKey);
  }

}

class YoutubeData{
  public videoKey: string;
  public description: string;
}
