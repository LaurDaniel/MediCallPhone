import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConferintaPage } from './conferinta.page';

describe('ConferintaPage', () => {
  let component: ConferintaPage;
  let fixture: ComponentFixture<ConferintaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferintaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConferintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
