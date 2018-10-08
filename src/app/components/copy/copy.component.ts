import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {

  public data: CopyData;

  constructor() { }

  ngOnInit() {
  }

}

class CopyData{
  public copy: string;
  public header: string;
}