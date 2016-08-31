import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//get JSZip Global
declare var JSZip: any;

//get saveAs Global from FileSaver.js
declare var saveAs: any;

@Injectable()
export class DownloadZipperService {

  //we'll set this to the declared JSZip var
  public zipObj:any;

  constructor(private http: Http) {

  }

  GenerateZipWithContent(contentStr) {

    //when this provider is created, create a zip file and download it from the browser

    //build new JSZip object
    this.zipObj = new JSZip();

    //unlike for JSZip, this is not needed, because "saveAs" is essentially a global function, not an Object with functions, properties, etc.
    //this.saveAs = new saveAs();

    this.zipObj.file("helloworld.txt", "Hello CADED Tech! " + contentStr);

    this.zipObj.generateAsync({type:"blob"})
    .then(function(content) {
        console.debug('file-saver saveAs called...');
        // see FileSaver.js
        saveAs(content, 'zipsample.zip');
    });

  }

}

