import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 500);
    });
  }

  getHero(id: number): Promise<Hero> {
    // return Promise.resolve(HEROES);
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
