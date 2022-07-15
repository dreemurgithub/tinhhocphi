// dom

function xoatkb(){
    for (let i=0;i<x.length;i++) x[i]=0;
    document.getElementById("tkb").innerText="Thứ "
}

function today(){
    b=new Date();
    start(b)
}

function start(b){
    console.log(b)
    document.getElementById("startday").innerText=("Ngày hệ thống là thứ "+(b.getDay()+1 ))+(" Ngày "+(b.getDate()))+( " Tháng "+(b.getMonth()+1) )
}

function checkvar(){
    console.log(thongke)
}

function tinhbuoi(){
    a=prompt("Nhập số buổi phụ huynh muốn học, mặc định không nhập thì xem như là 9 buổi")
    document.getElementById("sobuoi").innerText="Số buổi học: "+a
}
function hocnhanh(t){
    let i=t; a=i;
    document.getElementById("sobuoi").innerText="Số buổi học: "+a
}

function viewthongke(a,i){
    document.getElementsByClassName("start")[i-1].innerText="Đầu: Ngày "+ a[0].getDate() + " Tháng "+ ( a[0].getMonth()+1 )
    document.getElementsByClassName("end")[i-1].innerText="Cuối: Ngày "+ a[a.length-1].getDate() + " Tháng "+ ( a[a.length-1].getMonth()+1 )
    document.getElementsByClassName("times")[i-1].innerText="Thứ "+i +":"+(a.length)+" Buổi"
}

document.getElementById("startday").innerText="Ngày hệ thống là hôm nay: thứ "+(new Date().getDay()+1 )+" ngày "+new Date().getDate()+" tháng "+(new Date().getMonth()+1 )