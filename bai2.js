function input(){
    doC=prompt("Nhập độ C: ");
}
function xuly(){
    doF=((parseFloat(doC)*9)/5)+32;
}
function output(){
    document.write("Độ C nhập: "+doC);
    document.write("<br/>");
    document.write("Độ F sau khi chuyển đổi: "+doF);
}