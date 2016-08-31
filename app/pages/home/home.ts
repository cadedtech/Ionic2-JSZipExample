import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DownloadZipperService} from '../../providers/download-zipper-service/download-zipper-service'

@Component({
  templateUrl: 'build/pages/home/home.html',
  //include our newly created DownloadZipperService
  providers: [DownloadZipperService]
})
export class HomePage {

  //this will hold information about any content we want to put in the zip file
  public zipContent: any;

  //add the zipper here
  constructor(private navCtrl: NavController, private zipper: DownloadZipperService) {
  
  }

  createZip() {
    //call it here
    this.zipper.GenerateZipWithContent(this.zipContent);
  }

}
