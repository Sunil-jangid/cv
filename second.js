var a=10;
r();
b();
console.log(a);
function r(){
    console.log(a);
    var a=2;
    console.log(a);
}
function b(){
    var a=4;
    console.log(a);
}