import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';
import { FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment';
import {WebcamImage} from 'ngx-webcam';
import {HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.css']
})
export class NewBusinessCardComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
      console.log("unSubscribed");
    }
    
  }

  bValid = false;
  public webcamImage: WebcamImage = null;
  data: Object;
  subscription: Subscription;

  constructor(private dataBaseService: DataBaseService, 
    private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {}

  onSubmit(){  
    this.dataBaseService.createBusinessCard()
    .then(res =>{
      this.dataBaseService.clearForm();
      console.log("New Card added to database");
      console.log(res);
      this.bValid = true;
    })
  
    .catch(err =>{
      this.dataBaseService.clearForm();
      console.log("Something went wrong");
      console.log(err);
    });
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

    this.subscription = this.http.post(url, request)
    .subscribe( (results: any) => {
      //this.data = results;
      const sTemp = JSON.stringify(results);
      console.log("RESULTS RESULTS RESULTS");
      //console.log(sTemp);
      this.getInfo(sTemp);
      //console.log(JSON.stringify(results));
      console.log("RESULTS RESULTS RESULTS");

      
    });

    
  }

  /*
  Example of the beginning output i want to extract: 
  {"responses":[{"textAnnotations":[{"locale":"it","description":"James C. Corcoran\n6318 N. Pulaski Rd., FI. 2\nChicago, IL 60646-4512\n","boundingPoly":{"vertices":[{"x":155,"y":191}

  */
  getInfo(str: String) {
          
    var start = str.indexOf("description");
    console.log("check Start:" + start);
    var end = str.indexOf("boundingPoly");
    console.log("check End:" + end);
    var subTemp = str.substring(start + 11, end);
    console.log(subTemp);
    subTemp = subTemp.replace(/[":]/g, '');
    console.log(subTemp);
    const sArr = subTemp.split(/\\n/);
    console.log(sArr);
    this.setForm(sArr);
  }

  setForm(sArr: string[]) {

    var form = this.dataBaseService.cardForm;
    for(var i = 0; i < sArr.length; i++){
      if(i === 0) {
        form.patchValue({'firstName': sArr[i]});
      }

      else if(i === 1){
        form.patchValue({'lastName': sArr[i]});
      }

      else if(i === 2){
        form.patchValue({'email': sArr[i]});
      }

      else if(i === 3){
        form.patchValue({'info': sArr[i]});
      }

      else if(i === 4){
        form.patchValue({'phoneNumber': sArr[i]});
      }
      
      else{
        console.log(sArr[i]);
      }
    }
  }

  getImage(webcamImage: WebcamImage){
    this.webcamImage = webcamImage;
  }

}
