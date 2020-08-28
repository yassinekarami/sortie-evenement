import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  constructor(private httpClient: HttpClient) { }

  public getEvenements(): Observable<any>{
    return this.httpClient.get('https://data.loire-atlantique.fr/api/records/1.0/search/?dataset=224400028_sorties-et-loisirs-en-loire-atlantique-rt');       
  }

  public getEvenementDetail(eventid: string): Observable<any>{
    return this.httpClient.get('https://api.loire-atlantique.fr/opendata/1.0/event/'+eventid);
  }
}
