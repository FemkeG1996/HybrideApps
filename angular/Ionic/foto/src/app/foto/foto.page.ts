import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,   CameraPhoto, CameraSource } from '@capacitor/core';
import { FotoService } from '../foto.service';
const { Camera, Filesystem, Storage } = Plugins;
@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
base64data = '';
  constructor(private fs:FotoService) { }

  ngOnInit() {
  }
async foto(){
  const capturedPhoto = await Camera.getPhoto({
    // resultType: CameraResultType.Uri, 
    resultType: CameraResultType.Base64, 
    source: CameraSource.Camera, 
    quality: 100 
  });
  this.base64data = capturedPhoto.base64String;
  this.fs.saveFoto(this.base64data).subscribe((d) => {});
}
}
