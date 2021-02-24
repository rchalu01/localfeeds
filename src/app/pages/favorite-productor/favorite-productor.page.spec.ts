import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoriteProductorPage } from './favorite-productor.page';

describe('FavoriteProductorPage', () => {
  let component: FavoriteProductorPage;
  let fixture: ComponentFixture<FavoriteProductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteProductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteProductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
