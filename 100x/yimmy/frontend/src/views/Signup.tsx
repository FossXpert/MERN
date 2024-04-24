import { useState } from "react";
import CustomSignIn from "../components/CustomSignIn";
import Auth0SignIn from "../components/Auth0SignIn";
import { Button } from "@mui/material";


export default function SignIn(){

    const [customSignIn,setCustomSignIn] = useState(true)

    const handleOnclick = () =>{
        
    }


    return(
        <>
        <div>
            <Button onClick={handleOnclick}/>
        </div>
        {customSignIn ? (< CustomSignIn />) : (<Auth0SignIn/>)}
        </>
    )
}