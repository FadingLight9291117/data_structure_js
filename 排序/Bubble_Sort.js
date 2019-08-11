/**
 * 冒泡排序
 * @param {数组} a 
 * @param {元素个数} n 
 * @author 车亮召
 */
function Bubble_Sort(a, n) {
    for (let i = n - 1; i >= 0; i--) { // 一趟冒泡
        let flag = false;
        for (let j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                flag = true; // 发生了交换
            }
        }
        if (flag == false) break; // 全程无交换
    }
}

let a = [1, 3, 5, 2, 3, 12, 9, 6];
Bubble_Sort(a, a.length);
console.log(a);