/**
 * 希尔排序
 */
function Shell_Sort(a, n) {
    for (let i = parseInt(n / 2); i > 0; i = parseInt(i / 2)) { // 希尔增量序列
        for (let j = i; j < n; j++) {
            let temp = a[j];
            for (var k = j; k >= i && a[k - i] > temp; k -= i) {
                a[k] = a[k - i];
            }
            a[k] = temp;
        }
    }
}
let a = [2, 5,2,53,12,32,78,5,9,12,94,12,32,443,76,12,32,909, 2, 3];
Shell_Sort(a, a.length);
console.log(a);
