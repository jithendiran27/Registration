import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { IBtnDetail } from '../ibtn-detail';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-3',
  templateUrl: './detail-3.component.html',
  styleUrls: ['./detail-3.component.css'],
})
export class Detail3Component {
  @Input('data')
  data!: any;
  @Input('receivedData')
  receivedData!: any;
  // @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  // btnDetail3: IBtnDetail[] = [
  //   {
  //     name: 'D3',
  //     key: 'nxt',
  //     data: [],
  //   },
  // ];

  Detail3Form = this.fb.group({
    cardNo: [0, [Validators.required]],
  });

  get cardNo() {
    return this.Detail3Form?.get('cardNo');
  }

  constructor(private mainComp: MainComponent, private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.receivedData);
    this.Detail3Form.patchValue(this.receivedData);

    this.Detail3Form.valueChanges.pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      switchMap(async (name) => this.sendData(name || 0))
    );
  }

  submit() {
    this.data.data = this.Detail3Form.value;
    if (this.Detail3Form.valid) {
      this.mainComp.next();
      this.output.next(this.data.data);
      // console.log(this.mainComp.details);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.Detail1Data);
    } else {
      alert('please fill all the details');
    }
  }

  sendData(cardNum: any) {
    this.data.data = cardNum;
  }

  back() {
    this.mainComp.back();
  }
}
