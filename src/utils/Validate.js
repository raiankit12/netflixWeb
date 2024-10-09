export const checkValidData=(email,password)=>
{

    // const isNameValid = /^[A-ZÀ-ÿ][A-Za-zÀ-ÿ' -]+$/.test(name);


   
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "name is not valid";
    if(email==='')
    {
        return "Please enter the email-id"
    }

    if(password==="") return "please enter the password"
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    console.log(isEmailValid)
    //  if(isEmailValid==='') return "Please enter the email-id"
     if(!isEmailValid) return "Email ID is not valid. Please include '@'(e.g., user@example.com)";
   

    if(!isPasswordValid) return "Password is not valid. Please include at least one special character"

    return null
}