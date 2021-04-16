import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usar-pipes',
  templateUrl: './usar-pipes.component.html',
  styleUrls: ['./usar-pipes.component.css']
})
export class UsarPipesComponent implements OnInit {

  hoy = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
