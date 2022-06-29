import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEncheresComponent } from './liste-encheres.component';

describe('ListeEncheresComponent', () => {
  let component: ListeEncheresComponent;
  let fixture: ComponentFixture<ListeEncheresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEncheresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEncheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
