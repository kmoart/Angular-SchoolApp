import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchScorePageComponent } from './search-score-page.component';

describe('SearchScorePageComponent', () => {
  let component: SearchScorePageComponent;
  let fixture: ComponentFixture<SearchScorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchScorePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
