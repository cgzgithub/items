/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2017-04-20 21:57:18
 * @version $Id$
 */
/*头部*/
function dsp(itom1,itom2){
    itom1.style.backgroundColor="white";
    itom2.style.display="block";


}
function hid(itom3,itom4){
itom3.style.backgroundColor="#f1f1f1";
    itom4.style.display="none";
}
/*商品分类导航*/
window.onload=function(){
    var ull=document.getElementById("sort_left");
    var lii=ull.getElementsByTagName("li");

    for(var i=0;i<lii.length;i++){
        lii[i].onmouseover=function(){
this.children[2].style.display="block";
this.children[0].style.color="#c81623";
            this.style.backgroundColor="white";
        }
        lii[i].onmouseout=function(){
            this.children[2].style.display="none";
            this.children[0].style.color="white";
            this.style.backgroundColor="#c81623";
        }
    }
changepic();
showtime();
nextpic2();
lineth();
transform();
move(lfboxa,lfpica);
move(lfboxb,lfpicb);
f1display(f1ul1,f1father1);
f1display(f2ul1,f2father1);
f1display(f3ul1,f3father1);
f1display(f4ul1,f4father1);
f1display(f5ul1,f5father1);
f1display(f6ul1,f6father1);
f1display(f7ul1,f7father1);
f1display(f8ul1,f8father1);
f1display(f9ul1,f9father1);
f1display(f10ul1,f10father1);
moveimg(picfather1,picchild1,439,arrows_l1,arrows_r1,bottoms1);
moveimg(picfather2,picchild2,339,arrows_l2,arrows_r2,bottoms2);
moveimg(picfather3,picchild3,439,arrows_l3,arrows_r3,bottoms3);
moveimg(picfather4,picchild4,439,arrows_l4,arrows_r4,bottoms4);
moveimg(picfather5,picchild5,439,arrows_l5,arrows_r5,bottoms5);
moveimg(picfather6,picchild6,339,arrows_l6,arrows_r6,bottoms6);
moveimg(picfather7,picchild7,339,arrows_l7,arrows_r7,bottoms7);
moveimg(picfather8,picchild8,339,arrows_l8,arrows_r8,bottoms8);
moveimg(picfather9,picchild9,339,arrows_l9,arrows_r9,bottoms9);
moveimg(picfather10,picchild10,439,arrows_l10,arrows_r10,bottoms10);
moveimg(picfather11,picchild11,395,arrows_l11,arrows_r11,bottoms11);
moveimg(picfather12,picchild12,395,arrows_l12,arrows_r12,bottoms12);
floors();
}


/*图片轮播*/
function changepic(){
var sort_pic=document.getElementById("sort_pic");
var sort_picc=document.getElementById("sort_picc");
var pic=sort_picc.getElementsByTagName("img");
var bottomnum=document.getElementById("bottomnum").getElementsByTagName("span");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var index=1;
var timer1;
var capcity=0;
var timer2;
var capcity1;
var changed=false;
function bottomshow(){
    for(var i=0;i<bottomnum.length;i++){
        if(bottomnum[i].className="on")
            bottomnum[i].className="";
}
    bottomnum[index-1].className="on";

}
function changepic1(direct){

    var newleft=parseInt(sort_picc.style.left)+direct;
sort_picc.style.left=newleft+'px';
if(newleft<-4380)
sort_picc.style.left="-730px";
if(newleft>-730)
sort_picc.style.left="-4380px";
opchange();
capcity=0;

}

next.onclick=function(){
    clearInterval(timer1);
    if(index==6)
        {index=1;}
    else
        {index+=1;}
    bottomshow();
    if(changed==false){
    changepic1(-730);

}

}
prev.onclick=function(){
    if(index==1)
        {index=6;}
    else
        {index-=1;}
    bottomshow();
    changepic1(730);
}
function opchange(){
timer1=setInterval(function(){

    if(capcity<=100)
        {pic[index].style.opacity=capcity/100;
            capcity++;

        }
else{clearInterval(timer1);

}

},1);

}
    for(var j=0;j<bottomnum.length;j++)
    {
        bottomnum[j].onmouseover=function(){
            clearInterval(timer1);
            var newindex=parseInt(this.getAttribute("index"));
            var direct=-730*(newindex-index);
            changepic1(direct);

            index=newindex;
            bottomshow();
        }
    }

function autogo(){
     timer2=setInterval(function(){next.onclick();

     },2000);

}
autogo();
function stop(){
    clearInterval(timer2);
}
sort_pic.onmouseover=stop;
sort_pic.onmouseout=autogo;
function clear1(){clearInterval(timer1);}


}

/*显示时间*/
function showtime1(){
    var hourr=document.getElementById("hour");
    var minutee=document.getElementById("minute");
    var secondd=document.getElementById("second");
var h,m,s;
var nowtime=new Date();
h=nowtime.getHours();
m=nowtime.getMinutes();
s=nowtime.getSeconds();
if(h<10){hourr.innerHTML="0"+h}
else
hourr.innerHTML=h;
if(m<10){minutee.innerHTML="0"+m}
else
minutee.innerHTML=m;
if(s<10){secondd.innerHTML="0"+s}
else
secondd.innerHTML=s;

}

function showtime(){
   var point1=document.getElementById("hourss");
    var point2=document.getElementById("minutess");
    point1.innerHTML=":";
point2.innerHTML=":";
    var timer3=setInterval(function(){showtime1();},1000);
}

/*今日推荐图片轮播*/
function nextpic2(){
    var speeded=false;
    var prev2=document.getElementById("prev2");
var next2=document.getElementById("next2");
var picbox=document.getElementById("picbox");
next2.onclick=function(){
if(speeded==false){
speed(-1004);}


}
prev2.onclick=function(){
  if(speeded==false) {
speed(1004);}

}
function speed(offset){

var nowleft=parseInt(picbox.style.left)+offset;
var times=300;
var intervals=10;
var speed=offset/(times/intervals);
function go(){

if((speed<0 && parseInt(picbox.style.left)>nowleft) || (speed>0 && parseInt(picbox.style.left)<nowleft)){
    picbox.style.left=parseInt(picbox.style.left)+speed+"px";
    setTimeout(go,intervals);
     speeded=true;
}
else{
    speeded=false;
picbox.style.left=nowleft+"px";

if(nowleft<-4016)
{picbox.style.left=-1004+"px";}

if(nowleft>-1004)
{picbox.style.left=-4016+"px";}
}
}
go();
}

}

/*猜你喜欢*/
function lineth(){
    var timer5;
    var line=document.getElementById("line");
    var youlike_pic=document.getElementById("youlike_pic");
    var repeated=false;

    youlike_pic.onmouseover=function(){
        if(repeated==false){
        line.style.display="block";
repeated=true;
        line.style.left="0px";
        timer5=setInterval(function(){
            if(parseInt(line.style.left)>=846)
            {clearInterval(timer5);
            repeated=false;}
        else{
          line.style.left=parseInt(line.style.left)+47+"px";
        }

        },30);}

    }


}

function transform(){
var next_=document.getElementById("next_");
var long_div=document.getElementById("long_div");
next_.onclick=function(){
    if(parseInt(long_div.style.left)>-2400){
long_div.style.left=parseInt(long_div.style.left)-1212+"px";}
else
    {long_div.style.left="0px";}


}

}

/*京东品质生活*/
function move(target1,target2){
    var m=true;
var timer9;
var timer7;
target1.onmouseover=function move1(){
    clearInterval(timer7);
timer9=setInterval(function(){
        if(parseInt(target2.style.left)>-10){
    target2.style.left=parseInt(target2.style.left)-1+"px";
}

},20);
}
target1.onmouseout=function move2(){
clearInterval(timer9);
     timer7=setInterval(function(){
        if(parseInt(target2.style.left)<10){
    target2.style.left=parseInt(target2.style.left)+1+"px";

}

},20);
}

}
function f1display(m1,m2){
    var f1lis=m1.children;
    var f1divs=m2.children;


for(var i=0;i<f1lis.length;i++){
    f1lis[i].index=i;
    f1lis[i].onmouseover=function(){
    for(i=0;i<f1lis.length;i++){
        f1lis[i].className="f1li";
        f1divs[i].style.display="none";
    }
f1lis[this.index].className="f1li1";
f1divs[this.index].style.display="block";



}

}





}

function moveimg(m3,m4,distance,al,ar,bott){
var max=-4*distance;
var x=true;
var b=bott.getElementsByTagName("span");
var dex=1;
var timer10;
var timmer11;
var tarleft;
var y=false;
function bot(){

for(var i=0;i<b.length;i++)
if(b[i].className="bright"){
b[i].className="";
}
b[dex-1].className="bright";


}
ar.onclick=function(){

if(x==true){
    nextimg(distance);
if(dex==4){
    dex=1;
}
else{dex+=1;}

bot();

}
}

al.onclick=function(){
if(x==true){

    if(dex==1){
    dex=4;
}
else{dex-=1;}
bot();
nextimg(-distance);

}

}

function nextimg(distance1){

y=true;
var interv=5;
var atime=300;
var spee=distance1/(atime/interv);

 tarleft=parseInt(m4.style.left)-distance1;
timer10=setInterval(yo,interv);
function yo(){

if((spee>0&&parseInt(m4.style.left)>tarleft)||(spee<0&&parseInt(m4.style.left)<tarleft)){

m4.style.left=parseInt(m4.style.left)-spee+"px";
x=false;
}
else {
clearInterval(timer10);
m4.style.left=tarleft+"px";

if(parseInt(m4.style.left)>-distance
    ){
m4.style.left=max+"px";

}
if(parseInt(m4.style.left)<max){
m4.style.left=-distance+"px";

}
x=true;
}
}


}




for(var j=0;j<b.length;j++){



b[j].onmouseover=function(){


if(this.className=="bright"){
    return;
}
if(y==false){clearInterval(timer10);
    m4.style.left=tarleft+"px";
}
var newdex=parseInt(this.getAttribute("dex"));
var distance2=(newdex-dex)*distance;

nextimg(distance2);

dex=newdex;

bot();

y=false;
}




}




function auto1(){

    timmer11=setInterval(function(){ar.onclick();


    },2000);
    ar.style.display="none";
al.style.display="none";
}

 auto1();
function stop1(){clearInterval(timmer11);
ar.style.display="block";
al.style.display="block";
}

m3.onmouseover=stop1;
m3.onmouseout=auto1;


}



function floors() {
    var oNav = $('#floor');//导航壳
    var aNav = oNav.find('li');//导航
    var aDiv = $('#cotainer .fff');//楼层
    var oTop = $('#goTop');
    var content=['服饰鞋包','个护美妆','手机通讯','家用电器','电脑数码','运动健身','居家生活','母婴玩具','食品保健','图书音像','生活服务']
    //回到顶部
    $(window).scroll(function(){
        var winH = $(window).height();//可视窗口高度
        var iTop = $(window).scrollTop();//鼠标滚动的距离

        console.log(winH/2);

        if(iTop>=$('.life').offset().top){
            oNav.fadeIn();
            oTop.fadeIn();
            //鼠标滑动式改变
            aDiv.each(function(){
                var cd=parseInt(winH+iTop-$(this).offset().top);
                console.log(cd);
                if((winH+iTop - $(this).offset().top)>winH/2){
                    aNav.removeClass('active');
                    aNav.find('span').removeClass('hovers');
                    aNav.find('i').removeClass('hoveri');
                    aNav.eq($(this).attr('index')).addClass('active');
                    aNav.eq($(this).attr('index')).find('span').addClass('hovers');
                    aNav.eq($(this).attr('index')).find('i').addClass('hoveri');
                    // var index=$(this).attr('index');
                    // aNav.eq($(this).attr('index')).html(content[index]);
                }
            })
        }else{
            oNav.fadeOut();
            oTop.fadeOut();
        }
    })
    //点击top回到顶部
    oTop.click(function(){
        $('body,html').animate({"scrollTop":0},500)
    })
    //点击回到当前楼层
    aNav.click(function(){
        var t = aDiv.eq($(this).index()).offset().top;
        $('body,html').animate({"scrollTop":t},500);
        $(this).addClass('active').siblings().removeClass('active');
    });
}















