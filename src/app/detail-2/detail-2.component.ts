import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { IBtnDetail } from '../ibtn-detail';
import { MainComponent } from '../main/main.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-2',
  templateUrl: './detail-2.component.html',
  styleUrls: ['./detail-2.component.css'],
})
export class Detail2Component {
  @Input('data')
  data!: any;
  @Input('receivedData')
  receivedData!: any;
  // @Output() btnClick = new EventEmitter<any>();

  private output = new Subject<any>();

  btnDetail2: IBtnDetail[] = [
    {
      name: 'D2',
      key: 'nxt',
      data: [],
    },
  ];

  Detail2Form = this.fb.group({
    address: ['', [Validators.required]],
  });
  username: string = '';

  get address() {
    return this.Detail2Form?.get('address');
  }

  constructor(private mainComp: MainComponent, private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.receivedData);
    this.Detail2Form.patchValue(this.receivedData);
  }

  next() {
    this.data.data = this.Detail2Form.value;
    if (this.Detail2Form.valid) {
      this.mainComp.next();
      this.output.next(this.data.data);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.Detail1Data);
    } else {
      alert('please fill all the details');
    }
  }

  back() {
    this.mainComp.back();
    this.output.next(this.data.data);
  }

  onChanges(event: Event) {
    this.data.data = (event.target as HTMLInputElement).value;
    // this.data.data = this.username;
    console.log(this.data.data);
  }
}
