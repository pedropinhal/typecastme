import {
  Component,
  OnInit
} from '@angular/core';

import {
  HeroService
} from './hero.service';
import {
  Hero
} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
