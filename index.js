function myFunction(){
    const val=document.getElementById("demo").value;
     const value=Number(val);
    if(value<0){
      document.getElementById("result").innerHTML= "enter a positive value";
    }else if(value%2==0){
        document.getElementById("result").innerHTML=`${value+2},${value+4},${value+6}`;
    }else{
         document.getElementById("result").innerHTML=`${value+2},${value+4},${value+6}`;
     
    }
    }