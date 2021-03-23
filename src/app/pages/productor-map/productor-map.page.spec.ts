import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductorMapPage } from './productor-map.page';

describe('ProductorMapPage', () => {
  let component: ProductorMapPage;
  let fixture: ComponentFixture<ProductorMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductorMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
