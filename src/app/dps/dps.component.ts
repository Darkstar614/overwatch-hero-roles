import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dps',
  styleUrls: ['./dps.component.css'],
  templateUrl: './dps.component.html'
})
export class DPSComponent implements OnInit {
  public doomfistPortrait = 'assets/images/doomfist.png';
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
  ngOnInit() {

  }
}
