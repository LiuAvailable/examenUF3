import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObresArtComponent } from './obres-art.component';

describe('ObresArtComponent', () => {
  let component: ObresArtComponent;
  let fixture: ComponentFixture<ObresArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObresArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObresArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
