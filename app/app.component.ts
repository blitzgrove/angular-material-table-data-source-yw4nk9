import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  displayedColumns = ['data', 'a11', 'a12', 'a13', 'a14', 'a15'];
  dataSource: any;
  inputData = [];

  constructor() {
    SOURCE_DATA.forEach(data => {
      this.inputData.push(
        {
          data: data['n1'] + ', ' + data['n2'], 
          A11: data['A1']['A11']['t'], 
          A12: data['A1']['A12']['t'] || data['A1']['A12']['t1'], 
          A13: data['A1']['A13']['t'], 
          A14: data['A1']['A14']['t'], 
          A15: data['A1']['A15']['t'],
          id: 'id' + data['A1']['A11']['t']
        }
      );
    });
    this.dataSource = new MatTableDataSource<any>(this.inputData);
    const length = 10 - this.dataSource._data._value.length;
    for (let i = 0; i < length; i++) {
      this.dataSource._data._value.push(Object.create(null));
    }
  }
}

const SOURCE_DATA = [
  {
    "n1": "abcd",
    "n2": "abcde",
    "A1": {
      "A11": {
        "t": 1
      },
      "A12": {
        "t1": 2
      },
      "A13": {
        "t": 3
      },
      "A14": {
        "t": 4
      },
      "A15": {
        "t": 5
      }
    }
  },
  {
    "n1": "bcde",
    "n2": "bcdef",
    "A1": {
      "A11": {
        "t": 6,
        "t1": 6
      },
      "A12": {
        "t": 7
      },
      "A13": {
        "t": 8
      },
      "A14": {
        "t": 9
      },
      "A15": {
        "t": 10
      }
    }
  }
];
