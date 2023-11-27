import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { IBtnDetail } from '../ibtn-detail';
import { Subject } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-3',
  templateUrl: './detail-3.component.html',
  styleUrls: ['./detail-3.component.css'],
})
export class Detail3Component {
  @Input('data')
  data!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  btnDetail3: IBtnDetail[] = [
    {
      name: 'D3',
      key: 'nxt',
      data: [],
    },
  ];

  Detail3Form = this.fb.group({
    cardNo: ['', [Validators.required]],
  });

  constructor(private mainComp: MainComponent, private fb: FormBuilder) {}

  get cardNo() {
    return this.Detail3Form?.get('cardNo');
  }

  next() {
    this.btnDetail3[0].data = this.Detail3Form.value;
    if (this.Detail3Form.valid) {
      this.mainComp.next();
      // this.sendData();
      this.output.next(this.btnDetail3);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.Detail1Data);
    } else {
      alert('please fill all the details');
    }
  }

  back() {
    this.mainComp.back();
  }
}
