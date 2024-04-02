import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tokenExist } from "../atoms/Atom";
import { Signup } from "./Appbar";
import { useRecoilValue , useSetRecoilState} from "recoil";
import { useEffect } from "react";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const tokenExists = useRecoilValue(tokenExist)
    return <div>
        <br/>
        <center>
        <h1>Welcome to course selling website!</h1>
        { tokenExists && <Signup/>}
        </center>
    </div>
}

export default Landing;