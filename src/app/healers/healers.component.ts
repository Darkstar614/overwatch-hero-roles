import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'healers',
  styleUrls: ['./healers.component.css'],
  templateUrl: './healers.component.html'
})
export class HealersComponent implements OnInit {
  public mercyPortrait = 'assets/images/mercy.png';
  public zenyattaPortrait = 'assets/images/zenyatta.png';
  public lucioPortrait = 'assets/images/lucio.png';
  public anaPortrait = 'assets/images/ana.png';
  public sombraPortrait = 'assets/images/sombra.png';
  ngOnInit() {

  }
}
