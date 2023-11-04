import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypafComponent } from './keypaf.component';

describe('KeypafComponent', () => {
  let component: KeypafComponent;
  let fixture: ComponentFixture<KeypafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeypafComponent]
    });
    fixture = TestBed.createComponent(KeypafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
