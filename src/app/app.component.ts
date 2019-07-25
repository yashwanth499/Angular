import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  string = ['hello world ','hello world '];
  nestedObject = {a:1,b:2,c:3,d:{e:{f:{g:'i'}}}};
  reverseWord =['hello good','world' ]
  arr = [];
  allKeys = {};
  duplicateArray =[1,2,2,'a',3,3,3,'f','h','h', 'hello', 'hello'];

  getKeys(obj) { // get all nested object keys;
    this.checkValue(obj);
    return Object.keys(this.allKeys);
  }
  checkValue(value) {
    if (Array.isArray(value)) return this.checkArray(value);
    if (value instanceof Object) return this.checkObject(value);
  }
  checkObject(obj) {
    if (this.arr.indexOf(obj) >= 0) return;
    this.arr.push(obj);
    let keys = Object.keys(obj);
    for (var i = 0, l = keys.length; i < l; i++) {
      let key = keys[i];
      this.allKeys[key] = true;
      this.checkValue(obj[key]);
    }
  }
  checkArray(array) {
    if (this.arr.indexOf(array) >= 0) return;
    this.arr.push(array);
    for (var i = 0, l = array.length; i < l; i++) {
      this.checkValue(array[i]);
    }
  }


  // count repeated characters in a word
  countRepeatedStrings(stringArray) {
    let obj = {}
    stringArray.forEach(element => {
      for (var x = 0; x < element.length; x++) {
        let l = element.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
      }
    });
    return obj;
  } 

  // reverse the word 

  reverseTheWord(string) { 
      let arr =[];
      let arrOfStrings;
      for (var i = 0; i < string.length; i++) {
        arrOfStrings = string[i].split("").reverse().join("");
        arr.push(arrOfStrings);
      }
      return arr;  
  }

  reverseString(str) {
    let newString = [];
    str.forEach(element => {
      for (var i = element.length - 1; i >= 0; i--) {
        newString.push(element[i]);
      }
    });
    return newString;
  }

  removeDuplicateStrings(arr) {
    var unique = arr.filter((elem, index, self) => {
      return index === self.indexOf(elem);
  })
  return unique;
  }
}
