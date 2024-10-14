const login=()=>{
    let user=document.myform.username.value;
    let pass=document.myform.password.value;

    if(user==null||user=="")
    {
        alert("username is required")
        return false;
    }
    else if(pass==null||pass=="")
        {
            alert("password should be entered")
            return false;
        }
    
    else if(pass.length<6){
        alert("password should be atleast 6 characters")
        return false;
    }
  
}