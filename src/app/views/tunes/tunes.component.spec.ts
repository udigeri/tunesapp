import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesComponent } from './tunes.component';

describe('TunesComponent', () => {
  let component: TunesComponent;
  let fixture: ComponentFixture<TunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TunesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
