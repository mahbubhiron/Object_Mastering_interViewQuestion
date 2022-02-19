
function doSomething(){
    console.log(3333);
}

console.log(1111);
console.log(2222);
setTimeout(doSomething);
setTimeout(f =>{
    console.log('waiting........!');
},4000); // setTimeOut is execute only one time
setInterval(f => {
    console.log("doing it again...!");
},2000);// setInterval is execute after every 2000ms = 2s 
console.log(4444);
console.log(5555);