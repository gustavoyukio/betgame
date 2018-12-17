import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  Math = Math;

  currentCup: string = "brasil";

  games: Array<object> = [
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Europe League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"},
    { cup: "Europe League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Europe League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"},{ name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"}], location: "Parc des Princes"},
    { cup: "Champions League", date: "27/01/2019", teams:[
      { name: "LIVERPOOL", img: "http://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F364.png"},{ name: "PSG", img: "http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F160.png"}], location: "Anfield"}
  ];

  brasil = [
    {
      date: "28/12/2018",
      teams: [
        {
          name: "Sao Paulo",
          img: "https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-2.png"
        },
        {
          name: "Santos",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1045px-Santos_logo.svg.png"
        }
      ],
      location: "Morumbi"
    },
    {
      date: "28/12/2018",
      teams: [
        {
          name: "Fortaleza",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fortaleza_Esporte_Clube_logo.svg/1024px-Fortaleza_Esporte_Clube_logo.svg.png"
        },
        {
          name: "Santos",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1045px-Santos_logo.svg.png"
        }
      ],
      location: "Arrastão"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  changeCurrentCup () {

  }

}
