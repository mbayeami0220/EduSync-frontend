import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculairesComponent } from './circulaires.component';

describe('CirculairesComponent', () => {
  let component: CirculairesComponent;
  let fixture: ComponentFixture<CirculairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
