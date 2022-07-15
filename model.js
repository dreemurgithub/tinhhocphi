//declare biến tại đây

var a=9;var b=new Date();var c=0 ; //a là số ngày user nạp,b là ngày bắt đầu-new Date() c là ngày tiếp, 1 hoặc 2,0 nếu ko nhập mai mốt
var x=[],y=[],z=[],w=[];  //string tệp gốc x user nạp, tệp tkb là y, tệp tkb thêm ngày z, tệp hiển thị all ngày w
var t=[] //string trung gian của x và s, tối ưu là nhập trực tiếp từ click vào thẳng x thay vì thêm biến
var s=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]  //dành cho việc sorting theo tuần, 1 là CN
// đảm bảo các lệnh array luôn có =[] trước, do javascript có thể nhầm lệnh length thành lệnh của string và nhầm lẫn

var w1=[],w2=[],w3=[],w4=[],w5=[],w6=[],w7=[]
function cong(b){
    b.setDate(b.getDate()+1);
    console.log(b)
}

function nhaptime(b)   //đây là cách nhập cực chuẩn, ko rõ vì sao, biến global
{ let x,y,z=2022;
    c=0;
    x=prompt("Nhập ngày");y=prompt("nhập tháng");
    b.setDate(x);b.setMonth(y-1);b.setFullYear(z)
    console.log(b)
    start(b)
}


var thongke={
    w1:[],
    w2:[],
    w3:[],
    w4:[],
    w5:[],
    w6:[],
    w7:[],
}
function userx(a,x)  //Thu tkb từ nút click của user và confirm
{
    x[x.length]=a;console.log(x)
    document.getElementById("tkb").innerText=document.getElementById("tkb").innerText+(" "+a);
}

function mai(b,next)
{       let t=new Date()
        c=next;
        b.setDate(t.getDate()+c )     

        console.log(b)       // Có update b trong function, nhưng out khỏi function là b mất giá trị
        start(b)                //không được dùng lại new Date() trong function, lỗi!
        console.log(c)     
        
}
function cong(b,next){
    b.setDate(b.getDate()+next)
    start(b)
}

function nextweek(d){
    let i=d+7-(new Date().getDay()+1 )
    b.setDate(new Date().getDate()+i)
    start(b)
}