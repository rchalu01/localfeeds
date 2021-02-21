import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductorListPage } from './productor-list.page';

describe('ProductorListPage', () => {
  let component: ProductorListPage;
  let fixture: ComponentFixture<ProductorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
