import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementsService } from '../../../core/service/evenements.service';
import { EvenementDetailModel} from '../../../core/models/evenementDetail.model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  evenementDetail: EvenementDetailModel;
  constructor(
    private route: ActivatedRoute,
    private evenementsService: EvenementsService
  ) { }

  eventid: string;
  async ionViewWillEnter(){
    this.eventid = this.route.snapshot.paramMap.get('eventid');
    await this.evenementsService.getEvenementDetail(this.eventid).subscribe(
      data => {
        this.evenementDetail = data;
      }
    );

    
  }

}
