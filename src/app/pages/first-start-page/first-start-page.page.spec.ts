import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstStartPagePage } from './first-start-page.page';

describe('FirstStartPagePage', () => {
  let component: FirstStartPagePage;
  let fixture: ComponentFixture<FirstStartPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStartPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstStartPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
