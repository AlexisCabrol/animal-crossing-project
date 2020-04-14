import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecteComponent } from './insecte.component';

describe('InsecteComponent', () => {
  let component: InsecteComponent;
  let fixture: ComponentFixture<InsecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
