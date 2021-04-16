import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarPipesComponent } from './usar-pipes.component';

describe('UsarPipesComponent', () => {
  let component: UsarPipesComponent;
  let fixture: ComponentFixture<UsarPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsarPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsarPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
