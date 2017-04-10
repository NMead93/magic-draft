import { Component } from '@angular/core';
import { MagicService } from './magic.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Booster } from '../booster.model';
import { Draft } from '../draft.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    search;
    boosterList: Booster[];

  constructor(private magicService: MagicService) { }

  ngOnInit() {
  }

  getBoosters(numOfBoosters: number) {
      for(var i = 0; i < numOfBoosters; i++) {
          this.magicService.getBooster().subscribe(data => {
              this.search = data;
              var newBooster: Booster = new Booster(this.search.cards);
              this.boosterList.push(newBooster);
          });
      }
  }


}
