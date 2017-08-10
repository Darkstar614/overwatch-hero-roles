import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public mercyPortrait = 'assets/images/mercy.png';
  public zenyattaPortrait = 'assets/images/zenyatta.png';
  public lucioPortrait = 'assets/images/lucio.png';
  public anaPortrait = 'assets/images/ana.png';
  public sombraPortrait = 'assets/images/sombra.png';

  public genjiPortrait = 'assets/images/genji.png';
  public mccreePortrait = 'assets/images/mccree.png';
  public reaperPortrait = 'assets/images/reaper.png';
  public soldier76Portrait = 'assets/images/soldier76.png';
  public pharahPortrait = 'assets/images/pharah.png';
  public hanzoPortrait = 'assets/images/hanzo.png';
  public bastionPortrait = 'assets/images/bastion.png';
  public torbjornPortrait = 'assets/images/torbjorn.png';
  public symmetraPortrait = 'assets/images/symmetra.png';
  public junkratPortrait = 'assets/images/junkrat.png';
  public widowmakerPortrait = 'assets/images/widowmaker.png';

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
