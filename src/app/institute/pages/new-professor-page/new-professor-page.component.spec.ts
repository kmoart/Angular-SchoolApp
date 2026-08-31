import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessorPageComponent } from './new-professor-page.component';

describe('NewProfessorPageComponent', () => {
  let component: NewProfessorPageComponent;
  let fixture: ComponentFixture<NewProfessorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProfessorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProfessorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
