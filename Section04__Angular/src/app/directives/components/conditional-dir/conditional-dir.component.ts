import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-dir',
  templateUrl: './conditional-dir.component.html',
  styleUrls: ['./conditional-dir.component.css']
})
export class ConditionalDirComponent implements OnInit {

  alerta: boolean = true; 
  alertaElse: boolean = true;



  constructor() { }

  ngOnInit() {
  }

}
