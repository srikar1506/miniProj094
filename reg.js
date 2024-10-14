const register=()=>{
    let first=document.myform.firstname.value;
    let mail=document.myform.em.value;
    let uname=document.myform.user.value;
    let upass=document.myform.pass.value;
    let rpass=document.myform.repass.value;
    
    let emailpat=/^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,6}/
    for(let i=0;i<first.length;i++)
        {
            let code=first.charCodeAt(i)
            {
                if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) 
                {
                    alert("Name should be in alphabets")
                    return false;
                }
            }
        }
    if(uname==null||uname=="")
    {
        alert("username is required")
        return false;
    }
    else if(upass.length<6){
        alert("password should be atleast 6 characters")
        return false;
    }
    else if(first==null||first=="")
    {
        alert("firstname is required")
        return false;
    }
    else if(!(emailpat.test(mail)))
        {
            alert("email should be in correct way")
            return false;
        }
    else if(upass!=rpass)
    {
        alert("password should be matched")
        return false;
    }
    alert("registration Successfully completed")
    return true;
}