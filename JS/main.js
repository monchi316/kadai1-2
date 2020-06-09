'use strict'

{
  const syuto = ['tokyo', '東京', 'トウキョウ']
  while (true) {
    if (syuto.indexOf(prompt('日本の首都は？')) !== -1) {
      alert('正解です！');
    } else {
      alert('不正解です！');
    }
  }

}
