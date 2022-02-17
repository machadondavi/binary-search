const listNum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const value = 15;

const calculateAverage = (n1, n2) => {
    return Math.floor((n1 + n2) / 2);
}

const binarySearch = (listNum, n) => {
    let min = 0;
    let max = listNum.length - 1;
    let guess = calcularMedia(min, max);

    while (guess) {
        guess = calcularMedia(min, max);

        if(max < min) {
            return false;
        }
        
        if(listNum[guess] == n) {
            return true;
        } else if(listNum[guess] < n) {
            min = chute + 1;
        } else if(listNum[guess] > n) {
            max = chute - 1
        }
    }
    return false;
}