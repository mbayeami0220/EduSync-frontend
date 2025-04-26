import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCourriersComponent } from './liste-courriers.component';

describe('ListeCourriersComponent', () => {
  let component: ListeCourriersComponent;
  let fixture: ComponentFixture<ListeCourriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCourriersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
