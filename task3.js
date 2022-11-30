var fNum=prompt("enter fnum");
var sNum=prompt("enter sNum");
var thNum=prompt("enter thNum");
var desc=sNum*sNum-4*fNum*thNum;
if(desc>0){
    r1=(-sNum+Math.sqrt(desc))/(2*fNum);
    r2=(-sNum-Math.sqrt(desc))/(2*fNum);
    console.log(` roots are ${r1} and ${r2}`);
}
else if(desc==0){
    r1=r2= -sNum/(2*fNum);
    console.log( `roots are ${r1} and ${r2}`);
}