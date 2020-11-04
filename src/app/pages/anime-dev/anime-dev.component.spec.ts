import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDevComponent } from './anime-dev.component';

describe('AnimeDevComponent', () => {
  let component: AnimeDevComponent;
  let fixture: ComponentFixture<AnimeDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
