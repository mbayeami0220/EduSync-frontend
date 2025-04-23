import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesServiceComponent } from './notes-service.component';

describe('NotesServiceComponent', () => {
  let component: NotesServiceComponent;
  let fixture: ComponentFixture<NotesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
