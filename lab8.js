function fibonachi(n){
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(
    fibonachi(1),
    fibonachi(2),
    fibonachi(3),
    fibonachi(4),
    fibonachi(5),
    fibonachi(6),
    fibonachi(7),
    fibonachi(8),
    fibonachi(9),
    fibonachi(10),
);