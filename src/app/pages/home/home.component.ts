import { Component, OnInit } from '@angular/core';
import gamesData from '../../data/dataFake.json';

interface Game {
  id: string;
  gameLabel: string;
  gameCover: string;
  gamePrice: string;
  gameType: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = gamesData.games;

  constructor() { }

  ngOnInit(): void {
  }
}
