import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScoresPageComponent } from './list-scores-page.component';

describe('ListScoresPageComponent', () => {
  let component: ListScoresPageComponent;
  let fixture: ComponentFixture<ListScoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListScoresPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
