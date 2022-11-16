import { createSlice } from "@reduxjs/toolkit";

export const InternSlice = createSlice({
    name:'intern',
    initialState: [],
    reducers: {
        //here state = initialstate Array in above
        addInternshipArray: (state,action) => {
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const {addInternshipArray} = InternSlice.actions

export default InternSlice.reducer