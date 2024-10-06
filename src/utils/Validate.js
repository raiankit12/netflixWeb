export const checkValidData=(email,password)=>
{

    // const isNameValid = /^[A-ZÀ-ÿ][A-Za-zÀ-ÿ' -]+$/.test(name);


    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "name is not valid";

    if(!isEmailValid) return "Email id is not valid";

    if(!isPasswordValid) return "Password is not valid";


    return null
}