import { useState } from "react";
import CustomSignIn from "../components/CustomSignIn";
import Auth0SignIn from "../components/Auth0SignIn";
import { Button } from "@mui/material";

export default function SignIn(){

    const [customSignIn, setCustomSignIn] = useState(false);

    const handleOnClick = () => {
        setCustomSignIn(!customSignIn);
    };

    return(
        <>
            <div>
                <Button onClick={handleOnClick}>
                    {customSignIn ? "Show Auth0 Sign-in" : "Show Custom Sign-in"}
                </Button>
            </div>
            <div>
                {customSignIn ? <CustomSignIn /> : <Auth0SignIn />}
            </div>
        </>
    );
}
