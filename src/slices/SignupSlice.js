import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
    name:'signUp',
    initialState: {
       Dt: '',
       number: '',
       rollno: '',
       branch: '',
    },
    reducers: {
        //here state = initialstate Array in above
        addSignupArray: (state,action) => {
            state.Dt = action.payload.Dt;
            state.number = action.payload.number;  
            state.rollno = action.payload.rollno;
            state.branch = action.payload.branch; 
        }
    }
})

//create action creator functions
export const {addSignupArray} = SignupSlice.actions

export default SignupSlice.reducer