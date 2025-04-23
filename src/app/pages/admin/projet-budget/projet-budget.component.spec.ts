import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBudgetComponent } from './projet-budget.component';

describe('ProjetBudgetComponent', () => {
  let component: ProjetBudgetComponent;
  let fixture: ComponentFixture<ProjetBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
