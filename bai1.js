function input(){
    ly=prompt('Nhap diem ly: ');
    hoa=prompt('Nhap diem hoa: ');
    sinh=prompt('Nhap diem sinh: ');
}
function tinhtoan(){
    tong=parseFloat(ly)+parseFloat(hoa)+parseFloat(sinh);
    dtb=tong/3;
}
function output(){
    document.write("Diem trung binh: "+dtb);
    document.write("<br/>");
    document.write("Tong diem: "+tong);
}