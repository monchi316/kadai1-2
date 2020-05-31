'use strict'

let answer = 0;

while (answer < 100) {
  var result = prompt('日本の首都は？');
  if (result === "東京" || result === "とうきょう" || result === "トウキョウ" || result === "ﾄｳｷｮｳ" || result === "tokyo" ) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
  answer++;
}