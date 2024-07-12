import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction<{username: string, password: string}>('login');

