import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tanks',
  styleUrls: ['./tanks.component.css'],
  templateUrl: './tanks.component.html'
})
export class TanksComponent implements OnInit {
  public dvaPortrait = 'assets/images/dva.png';
  public roadhogPortrait = 'assets/images/roadhog.png';
  public reinhardtPortrait = 'assets/images/reinhardt.png';
  public winstonPortrait = 'assets/images/winston.png';
  public orisaPortrait = 'assets/images/orisa.png';
  public zaryaPortrait = 'assets/images/zarya.png';
  public meiPortrait = 'assets/images/mei.png';
  ngOnInit() {

  }
}
