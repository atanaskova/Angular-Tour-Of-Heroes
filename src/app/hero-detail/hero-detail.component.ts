import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero?:Hero;
  hero:Hero | undefined;
  
  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private heroService:HeroService
  ) { }

  getHero(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero=>this.hero=hero)
  }

  goBack(){
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

}
