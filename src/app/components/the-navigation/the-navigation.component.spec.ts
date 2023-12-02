import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNavigationComponent } from './the-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TheNavigationComponent', () => {
  let component: TheNavigationComponent;
  let fixture: ComponentFixture<TheNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheNavigationComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
