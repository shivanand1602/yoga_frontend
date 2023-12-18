function Validation(values){
    let error={};
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern= /^.{8,}$/   //minimum 8 character

    if(values.name===""){
        error.name="Name should not be empty"
    }
    else{
        error.name=""
    }
    
    if(values.email===""){
        error.email="Email should not be empty"
    }

    else if(!email_pattern.test(values.email)){
        error.email="Email Didn't match"
    }
    else{
        error.email=""
    }

    if(values.age===""){
        error.age="Please Enter Your Age"
    }
    else {
        error.age="";
    }

    if(values.batch===""){
        error.batch="Please choose one of the available batch time"
    }
    else{
        error.batch="";
    }


    return error;
}

export default Validation;