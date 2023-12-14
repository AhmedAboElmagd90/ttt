
function  validate(){
    var result = document.getElementById("result");

    var user = document.getElementById("user").value;
    var email = document.getElementById("EMail").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    // style result
     result.setAttribute("class","text-center alert alert-danger p-2 ")
     result.style.transition= "all .5s linear";
    // style result

    if (user=="" && email=="" && password=="" && confirm==""){
        result.innerHTML = "*Enter Date In Form";
        return false ; 
    }else if (user.length<5 || user.length>15){
        result.innerHTML = "*Enter 5-15 chr in user name";
        return false ;  
    }else if (email.indexOf('@')==-1){
        result.innerHTML = "*Enter valid email";
        return false ;
    }else if (password.length<8){
        result.innerHTML = "*Enter 8chr ";
         return false ;
    }else if (password != confirm){
        result.innerHTML = "*Enter mathing password ";
        return false ;
    }else{
        return true ;
    }
}