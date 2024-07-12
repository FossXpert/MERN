// Here we are creating RTK Query dont' confuse it with reducers in authSlice

require('dotenv').config();

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { userLoggedIn } from "../auth/authSlice";

