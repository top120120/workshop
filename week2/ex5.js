const recurAdd = (a) => {
    if (a == 0) return 0;
    return recurAdd(a-1)+a;
}

setTimeout(()=>{
    console.log(recurAdd(10));
}, 1000);
setTimeout(()=>{
    console.log(recurAdd(5));
}, 100);
setTimeout(()=>{
    console.log(recurAdd(1));
}, 1);
