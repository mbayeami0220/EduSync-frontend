import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRealiseComponent } from './budget-realise.component';

describe('BudgetRealiseComponent', () => {
  let component: BudgetRealiseComponent;
  let fixture: ComponentFixture<BudgetRealiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetRealiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRealiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
