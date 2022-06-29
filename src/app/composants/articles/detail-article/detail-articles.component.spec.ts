import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticlesComponent } from './detail-articles.component';

describe('DetailArticlesComponent', () => {
  let component: DetailArticlesComponent;
  let fixture: ComponentFixture<DetailArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
