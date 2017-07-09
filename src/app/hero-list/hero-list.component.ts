import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from "../hero";
import { HeroService } from '../services/hero-service.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes()
  }
  title: string;
  heroes: Hero[];

  constructor(private heroService: HeroService, private location: Location) {
    this.title = "Heros Management App";
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  goBack(): void {
    this.location.back();
  }
}
