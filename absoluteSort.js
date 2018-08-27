// 核心代码
const absoluteSort = (list1) => {
  let ans = []
  const collectRow = (currentList) => {
      if (currentList.length == 0) {
          return;
      }
      // 寻找最小 y
      const minYElement = findMinBy(currentList, 'y');
      // 通过最小 y 定位最小行的元素
      const minRowElements = currentList.filter(item => item.y - minYElement.y <= 50);
      // 当前行按照 x 升序排列
      minRowElements.sort((a, b) => {
          if (a.x < b.x) {
              return -1;
          } else if (a.x > b.x) {
              return 1;
          }
          return 0;
      })
      ans = ans.concat(minRowElements);
      const remainList = currentList.filter(item => item.y - minYElement.y > 50);
      collectRow(remainList)
  };
  collectRow(list1);
  return ans
}