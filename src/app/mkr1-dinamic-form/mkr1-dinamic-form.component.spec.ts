import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mkr1DinamicFormComponent } from './mkr1-dinamic-form.component';

describe('Mkr1DinamicFormComponent', () => {
  let component: Mkr1DinamicFormComponent;
  let fixture: ComponentFixture<Mkr1DinamicFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Mkr1DinamicFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mkr1DinamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
