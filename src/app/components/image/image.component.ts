import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  public data: ImageData

  constructor() { }

  ngOnInit() {
  }

}

class ImageData{
  public uri: string;
  public description: string;
}