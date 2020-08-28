import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Accueil } from './accueil.page';

describe('Accueil', () => {
  let component: Accueil;
  let fixture: ComponentFixture<Accueil>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Accueil],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Accueil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
