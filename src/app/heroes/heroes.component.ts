import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero?:Hero;

  heroes:Hero[]=[];

  // onSelect(hero:Hero){
  //   this.selectedHero=hero;
  //   this.messageService
  //   .add(`HeroesComponent: Selected hero id is: ${hero.id}`);
  // }

  getHeroes(){
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes);
  }

  constructor(
    private heroService:HeroService,
    // private messageService:MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

}