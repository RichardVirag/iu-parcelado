/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedFooter } from './shared-footer.component';

describe('SharedFooter', () => {
  let component: SharedFooter;
  let fixture: ComponentFixture<SharedFooter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedFooter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
