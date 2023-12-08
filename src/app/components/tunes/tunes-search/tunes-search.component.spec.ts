import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesSearchComponent } from './tunes-search.component';

describe('TunesSearchComponent', () => {
  let component: TunesSearchComponent;
  let fixture: ComponentFixture<TunesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TunesSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TunesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
