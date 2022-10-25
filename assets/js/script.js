function validname(){
  var name= document.getElementById("name").value;
  var uname= document.getElementById("uname");
  var nameregex = /^[A-Za-z]*\s{1}[A-Za-z]*$/
  if (name==''||name==null||name==undefined){
    uname.style.display="block";
    return false;
  } 
  else if(nameregex.test(name)== false){
    uname.style.display="block";
    return false;
  }
  else{
    uname.style.display="none";
    return true;
  }
 } 


function validdate(){
  var date= document.getElementById("date").value;
  var udate=document.getElementById("udate");
  if(date==''||date==null||date==undefined){
    udate.style.display="block";
    return false;
  }
  else{
    udate.style.display="none";
     return true;
  }
} 

function validmail(){
  var email= document.getElementById("email").value;
  var uemail=document.getElementById("uemail");
  var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}/;
  if (email==''||email==null||email==undefined){
   uemail.style.display="block";
  return false;
  }
  else if (emailregex.test(email)== false) {
   uemail.style.display="block";
  return false;
  }
  else{
    uemail.style.display="none";
  return true;
  }
}

function validnumber(){  
  var number = document.getElementById("number").value;
  var unumber= document.getElementById("unumber");
  var numberregex =/^[6-9]\d{9}/
  if (number==''||number==null||number==undefined||number == 10){
    unumber.style.display="block";
   return false;
 }else if (numberregex.test(number)== false){
   unumber.style.display="block";
   return false;
 }
 else{
    unumber.style.display="none";
    return true;
 }
} 

function validgender(){
   var gender=document.myform.gender.value;
   var ugender=document.getElementById("ugender");
   if(gender==''||gender==null||gender==undefined){
    ugender.style.display="block";
  return false;
  }
  else
  {
    ugender.style.display="none";
   return true;
  }
}

function validcountry(){
   var country = document.getElementById("country").value;
   var ucountry= document.getElementById("ucountry");
   if (country==''||country==null||country==undefined){
    ucountry.style.display="block";
   return false;
   }
   else{
     ucountry.style.display="none";
      return true;
   }
 }

function validcheck(){
    var checkBox= document.getElementById("mycheck");
    var text=document.getElementById("text");
    if (checkBox.checked==false) {
    text.style.display = "block";
    return false;
    }else{
      text.style.display="none";
     return true;
     }
  }

function validateForm(){
   if(!validname() || !validdate() || !validmail()|| !validnumber() || !validgender()|| !validcountry()|| !validcheck())
    return false;

  alert("Applied successfully");
   setTimeout(function(){
     location.reload()
     },1000)
    }