import { Component, ViewChild } from '@angular/core';
import { EvenementsService } from '../../core/service/evenements.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EvenementModel } from 'src/core/models/evenement.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll : IonInfiniteScroll;

  evenements: EvenementModel[] = [];
  constructor(private evenementService: EvenementsService) {}

  ngOnInit() {
    this.evenementService.getEvenements().toPromise().then( data => {
        data['records'].map(event => {
          this.evenements.push(new EvenementModel(event['fields']))
        })
      }
    );
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500)
  }

  goToDetail(item) {
    console.log(item)
  }




}
