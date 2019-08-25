function medium3(a, left, right) {
    let center = parseInt((left + right) / 2);
    if (a[center] < a[left]) {
        let ex = a[center];
        a[center] = a[left];
        a[left] = ex;
    }
    if (a[right] < a[center]) {
        let ex = a[right];
        a[right] = a[center];
        a[center] = ex;
    }
    if (a[center] < a[left]) {
        let ex = a[center];
        a[center] = a[left];
        a[left] = ex;
    }
    let ex = a[center];
    a[center] = a[right - 1];
    a[right - 1] = ex;
    return right - 1;
}

function InsertionSort(a, left, right) {
    let temp;
    for (let i = left + 1; i <= right; ++i) {
        temp = a[i];
        let j;
        for (j = i; a[j - 1] > temp && j > left; --j) {
            a[j] = a[j - 1];
        }
        a[j] = temp;
    }
}

function QuickSort(a, left, right) {
    const cutOff = 6;
    if (right - left >= cutOff) {
        let pivot = medium3(a, left, right);
        let temp = a[pivot];
        let i = left;
        let j = right - 1;
        while (true) {
            while (a[++i] < temp) {
            }
            while (a[--j] > temp) {
            }
            if (i < j) {
                let ex = a[i];
                a[i] = a[j];
                a[j] = ex;
            } else {
                break;
            }
        }
        let ex = a[pivot];
        a[pivot] = a[i];
        a[i] = ex;
        QuickSort(a, left, i - 1);
        QuickSort(a, i + 1, right);
    } else {
        InsertionSort(a, left, right);
    }
}

function Quick_Sort(a) {
    QuickSort(a, 0, a.length - 1);
}

let a = [2, 3, 23, 5, 65, 1, 32, 77, 86, 9, 20, 54];
Quick_Sort(a);
console.log(a);
