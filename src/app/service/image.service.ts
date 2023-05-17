import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) {}

  public async uploadImage($event: any, name: string): Promise<void> {
    try {
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen/${name}`);
      await uploadBytes(imgRef, file);
      await this.getImages();
    } catch (error) {
      console.error(error);
      throw new Error('Error al subir la imagen');
    }
  }

  private async getImages(): Promise<void> {
    try {
      const imagesRef = ref(this.storage, 'imagen');
      const response = await list(imagesRef);
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las imágenes');
    }
  }
}


