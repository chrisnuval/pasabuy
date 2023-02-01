import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PhotoService, UserPhoto } from '../services/photo.service';

import { GalleryPage } from './gallery.page';

describe('Gallery Page', () => {
  let component: GalleryPage, galleryPage: GalleryPage;
  let fixture: ComponentFixture<GalleryPage>;
  let platform: Platform;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [GalleryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let photoServiceSpy = new PhotoService(platform);
    galleryPage = new GalleryPage(photoServiceSpy,new ActionSheetController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add gallery', () => {
    expect(galleryPage.addPhotoToGallery()).toBeTruthy();
  });

});
