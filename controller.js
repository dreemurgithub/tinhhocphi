//function 
function day1st(x,b)
{
    let i,k=10                // xuất i là ngày thứ bắt đầu của chuỗi cho y
    for (i=0;i<x.length;i++)
        if (    x[i]==(   b.getDay()+1 )   ) {console.log(i);k=x[i]; return i};
    if (k!==(b.getDay()+1)) alert("Ngày bắt đầu không trùng với TKB")
    
}

function xuaty(x,b) //tạm thời test số buổi là 20
{   
    let i=day1st(x,b);y[i]=x[i];console.log(x[i])
    for (let k=0;k<x.length;k++) 
        if(x[k]>=x[i]) y[k]=x[k]; else y[k]=x[k]+7;
    sort(y)       
    console.log(y)
}
function sort(y)
{   console.log("Kích hoạt sort")
    let i; let k;let t;
    for (k=y.length;k>0;k--)
       { for (i=0;i<k;i++)
                {
                if (y[i]>y[i+1])
                    {   t=y[i]
                        y[i]=y[i+1]
                        y[i+1]=t
                    }
                }
        }
}



function sodu(chia,bichia)
{ let z=chia-Math.floor(chia/bichia)*bichia
    return z;
 }

function xuatz(x,sobuoi)
{  xuaty(x,b)
    
    for (let i=0;i<sobuoi;i++)     // start từ ngày bắt đầu thay vì 0
    {z[i]= y[sodu(i,y.length)] + Math.floor(i/y.length)*7 }
    console.log(z)
}








function xuatw(z,sobuoi)  //hoạt động tốt, đéo hiển thị được ngày tháng
{   xuatz(x,sobuoi);
     
    let i;console.log(z);                                       //lý do ko hiện ngày tháng là dùng b.setdate() là tính toán cho b, ko phải cho w[i]
    for (i=0;i<sobuoi;i++)
    {   let d=new Date();
        d.setFullYear(b.getFullYear()  )
        d.setMonth(b.getMonth() )
        d.setDate(  b.getDate() + z[i] - z[0]  )
        console.log(d)                                                          //vì lí do nào đó, dùng lệnh mai(b,next) khiến cho d không assign giá trị mới của b
                                                                        //hình như là do ko có kích hoạt function mai trong xuatw, khả năng là do mai(b,1) không giữ b global
        w[i]=d;
    }   
    console.log(w) ;view();taothongke()
      
}

function view()  //xuất ra id "list" để coi hết danh sách
{   document.getElementById("list").innerText=""
    let i=0;for(i;i<a;i++) {
        document.getElementById("list").innerText=document.getElementById("list").innerText + 
        ( " --- "+" Ngày "+w[i].getDate()) + ( " Tháng " +(w[i].getMonth()+1)) +("/ Thứ "+( w[i].getDay() + 1))
                            }
}




function countx(w,k)
{
    let ww=[]
    for(let i=0;i<w.length;i++)
        {if ( (w[i].getDay()+1)==k) ww[ww.length]=w[i]}
    return ww;
}

function taothongke()
{
    thongke.w1=countx(w,1); if(thongke.w1[1]!==undefined) viewthongke(thongke.w1,1)
    thongke.w2=countx(w,2); if(thongke.w2[1]!==undefined) viewthongke(thongke.w2,2)
    thongke.w3=countx(w,3); if(thongke.w3[1]!==undefined) viewthongke(thongke.w3,3)
    thongke.w4=countx(w,4); if(thongke.w4[1]!==undefined) viewthongke(thongke.w4,4)
    thongke.w5=countx(w,5); if(thongke.w5[1]!==undefined) viewthongke(thongke.w5,5)
    thongke.w6=countx(w,6); if(thongke.w6[1]!==undefined) viewthongke(thongke.w6,6)
    thongke.w7=countx(w,7); if(thongke.w7[1]!==undefined) viewthongke(thongke.w7,7)
}

function viewthongke(a,i)
{
    document.getElementsByClassName("start")[i-1].innerText="Đầu: Ngày "+ a[0].getDate() + " Tháng "+ ( a[0].getMonth()+1 )
    document.getElementsByClassName("end")[i-1].innerText="Cuối: Ngày "+ a[a.length-1].getDate() + " Tháng "+ ( a[a.length-1].getMonth()+1 )
    document.getElementsByClassName("times")[i-1].innerText="Thứ "+i +":"+(a.length)+" Buổi"
}