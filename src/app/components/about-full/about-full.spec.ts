import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFullComponent } from './about-full';

describe('AboutFull', () => {
  let component: AboutFullComponent;
  let fixture: ComponentFixture<AboutFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFullComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutFullComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
