function sumFibs(num) {
    let pre = 1;
    let now = 1;
    for (let i = 0; i < num; i++) {
        let fib = pre + now;
        pre = now;
        now = fib;
        console.log(fib);
    }
    
}
  
sumFibs(10);