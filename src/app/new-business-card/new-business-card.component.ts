import { Component, OnInit, ɵConsole } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';
import { FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment';
import {WebcamImage} from 'ngx-webcam';
import{HttpClient } from '@angular/common/http';


@Component({
  selector: 'new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.css']
})
export class NewBusinessCardComponent implements OnInit {

  bValid = false;
  public webcamImage: WebcamImage = null;
  data: Object;

  constructor(private dataBaseService: DataBaseService, 
    private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {}

  onSubmit(){
    this.bValid = this.dataBaseService.sendForm();
  }

  testContent(): void{
    console.log(this.webcamImage.imageAsBase64);
    const parsedImage = this.webcamImage.imageAsBase64.replace('/^data:image\/(png|jpg|jpeg);base64,/', '');
    console.log(parsedImage);
  }

  makeRequest(): void {

    const url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision}`;
    //const parsedImage = this.webcamImage.imageAsBase64.replace('/^data:image\/(png|jpg|jpeg);base64,/', '');
    const request: any = {
      'requests': [
        {
          'image':{
            'content': this.webcamImage.imageAsBase64

            },
            'features':[
              {
                'type': 'TEXT_DETECTION'
              }
            ]
          }
        ]
    };

    this.http.post(url, request)
    .subscribe( (results: any) => {
      console.log("RESULTS RESULTS RESULTS");
      console.log(results);
      console.log("RESULTS RESULTS RESULTS");
      this.data = results;
    });

  }

  getImage(webcamImage: WebcamImage){
    this.webcamImage = webcamImage;
  }

}
