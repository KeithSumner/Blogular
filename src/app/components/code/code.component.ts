import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  public data: CodeData;

  constructor() { }

  ngOnInit() {
  }

}

class CodeData{
  public code: string;
  public header: string;
}