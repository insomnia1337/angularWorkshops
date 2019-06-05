import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/app/utils/api';
import { map } from 'rxjs/operators';
import { HttpResponseModel } from 'src/app/utils/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(private http: HttpClient) { }

  checkUserName({value}) {
    return this.http.get(Api.DOES_IT_EXIST, {params: {username: value}})
    .pipe(
      map((value: HttpResponseModel)=>{
        if(value.ok) {
          return null
        } else {
          return {error: value.error}
        }
      })
    )
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('Joe', [
        Validators.required,
        Validators.email
      ], this.checkUserName.bind(this)),
      birthDate: new FormControl(null,
        [Validators.required, CustomValidators.dateShouldBePassed]),
      hobbies: new FormGroup({
        climbing: new FormControl(null),
        plazing: new FormControl(null),
        fishing: new FormControl(null)
      }, CustomValidators.atLeastOneShouldbeSelected)
    })
  }

}
