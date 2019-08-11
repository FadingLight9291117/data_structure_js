/**
 * 希尔排序
 */
function Shell_Sort(a, n) {
    for (let i = Math.round(n / 2); i > 0; i = Math.round(i / 2)) {    // 希尔增量序列
        for (let j = i; j < n; j++) {
            let temp = a[j];
            for (var k = j; (k >= i) && (a[k - i]) > temp; k -= i) {
                a[k] = a[k - i];
            }
            a[k] = temp;
        }
    }
}
let a = [2,5,2,3];
Shell_Sort(a,a.length);
