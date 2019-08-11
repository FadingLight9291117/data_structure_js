/**
 * 插入排序
 * @param {数组} a 
 * @param {元素个数} n 
 * @author 车亮召
 */
function Insertion_Sort(a, n) {
    for (let i = 1; i < n; i++) {
        let temp = a[i]; // 摸下一张牌
        for (var j = i; j > 0 && a[j - 1] > temp; j--) {
            a[j] = a[j - 1]; // 移出空位，往后移一位
        }
        a[j] = temp; // 放入新牌
    }
}
let a = [2, 4, 5, 2, 1, 10, 9, 8];
Insertion_Sort(a, a.length);
console.log(a);