import { Component, ViewChild } from '@angular/core';
import { EvenementsService } from '../../core/service/evenements.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EvenementModel } from 'src/core/models/evenement.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.page.html',
  styleUrls: ['accueil.page.scss']
})
export class Accueil{
  @ViewChild(IonInfiniteScroll) infiniteScroll : IonInfiniteScroll;

  evenements: EvenementModel[] = [];
  constructor(
    private evenementService: EvenementsService,
    private router: Router
    ) {}

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

}
