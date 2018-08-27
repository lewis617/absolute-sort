# absolute-sort
对绝对定位的 div 进行排序，为 flex 布局作准备。

## 使用方法

引入 absoluteSort.js 的 absoluteSort 方法

```js
// 注意，Math.floor(Math.random() * 40) 会随机生成 0-39，这是为了让 div 可以随机布局，来测试一些误差
const divList1 = [
        {
            x: 50 + Math.floor(Math.random() * 40),
            y: 50 + 200 + Math.floor(Math.random() * 40),
            val: 1,
        },
        {
            x: 50 + 200 + Math.floor(Math.random() * 40),
            y: 50 + Math.floor(Math.random() * 40),
            val: 2,
        },
        {
            x: 50 + Math.floor(Math.random() * 40),
            y: 50 + Math.floor(Math.random() * 40),
            val: 3,
        },


        {
            x: 50 + 200 + Math.floor(Math.random() * 40),
            y: 50 + 200 + Math.floor(Math.random() * 40),
            val: 4,
        },
    ];

const divList2 = absoluteSort(divList1);

console.log(divList2);
// 变成 3->2->1->4，即左右上下的顺序
// [{"x":89,"y":65,"val":3},{"x":286,"y":85,"val":2},{"x":52,"y":263,"val":1},{"x":264,"y":265,"val":4}]
```
