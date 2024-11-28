import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMainComponent } from './router-main.component';

describe('RouterMainComponent', () => {
  let component: RouterMainComponent;
  let fixture: ComponentFixture<RouterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
