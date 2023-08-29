const user=document.getElementById("date");
const submit=document.getElementById("button");
const ans=document.getElementById("answer");
submit.onclick=age;
function age(){
    const ud=new Date(user.value);
    let y1=ud.getFullYear();
    let m1=ud.getMonth();
    let d1=ud.getDay();
    const pd=new Date();
    let y2=pd.getFullYear();
    let m2=pd.getMonth();
    let d2=pd.getDay();
    let y3=0;
    let m3=0;
    let d3=0;
    y3=y2-y1;
    if(m2>=m1)
    m3=m2-m1;
    else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1)
    d3=d2-d1;
    else{
        m3--;
        d3=daysinm(y1,m1)+d2-d1;
    }
    if(m3<0)
    m3=11;
    
     ans.innerHTML=y3+"-years "+m3+"-months "+d3+"-days";

}
function daysinm(y,m){
    return new Date(y,m,0).getDate();
}