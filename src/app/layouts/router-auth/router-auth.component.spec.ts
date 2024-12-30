import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAuthComponent } from './router-auth.component';

describe('RouterAuthComponent', () => {
  let component: RouterAuthComponent;
  let fixture: ComponentFixture<RouterAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
