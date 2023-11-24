import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IBtnDetail } from '../ibtn-detail';
import { Validators, FormBuilder } from '@angular/forms';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-detail-1',
  templateUrl: './detail-1.component.html',
  styleUrls: ['./detail-1.component.css'],
})
export class Detail1Component implements OnInit {
  @Input('data')
  data!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();
  genders = ['male', 'female'];

  btnDetail1: IBtnDetail[] = [
    {
      name: 'D1',
      key: 'nxt',
      data: [],
    },
  ];
  Detail1Form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });

  constructor(private mainComp: MainComponent, private fb: FormBuilder) {}

  ngOnInit() {
    this.data.isCompleted = true;
  }

  get name() {
    return this.Detail1Form?.get('name');
  }

  get email() {
    return this.Detail1Form?.get('email');
  }

  get age() {
    return this.Detail1Form?.get('age');
  }

  get gender() {
    return this.Detail1Form?.get('gender');
  }

  // sendData() {
  // this.output.next(this.btnDetail1);
  // }

  next() {
    const Detail1Data = this.Detail1Form.value;
    if (this.Detail1Form.valid) {
      this.mainComp.next();
      // this.sendData();
      this.output.next(Detail1Data);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.Detail1Data);
    } else {
      alert('please fill');
    }
  }
}
