import { Component, OnInit } from '@angular/core';

import { Hero } from "./hero";
import { HeroService } from './services/hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title: string;
  
  constructor(private heroService: HeroService) {
    this.title = "Heros Management App";
  }
}
