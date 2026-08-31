import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScorePageComponent } from './new-score-page.component';

describe('NewScorePageComponent', () => {
  let component: NewScorePageComponent;
  let fixture: ComponentFixture<NewScorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewScorePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
