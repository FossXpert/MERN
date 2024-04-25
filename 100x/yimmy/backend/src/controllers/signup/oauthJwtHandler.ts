import { useAuth0 } from "@auth0/auth0-react";
import {auth} from "express-oauth2-jwt-bearer"


const jwtCheck = auth({
    audience: 'This is a unique Identifier',
    issuerBaseURL: 'https://dev-cd616eaxtu7so5dm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });