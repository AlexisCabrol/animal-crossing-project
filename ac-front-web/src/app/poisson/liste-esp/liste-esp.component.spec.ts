import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEspComponent } from './liste-esp.component';

describe('ListeEspComponent', () => {
  let component: ListeEspComponent;
  let fixture: ComponentFixture<ListeEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
