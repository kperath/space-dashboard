import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPodComponent } from './nasa-pod.component';

describe('NasaPodComponent', () => {
  let component: NasaPodComponent;
  let fixture: ComponentFixture<NasaPodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
