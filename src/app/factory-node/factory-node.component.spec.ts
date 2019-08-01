import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryNodeComponent } from './factory-node.component';

describe('FactoryNodeComponent', () => {
  let component: FactoryNodeComponent;
  let fixture: ComponentFixture<FactoryNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
