import { createSlice } from "@reduxjs/toolkit";

export const CresSlice = createSlice({
    name:'cres',
    initialState: [],
    reducers: {
        //here state = initialstate Array in above
        addCoursesArray: (state,action) => {
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const {addCoursesArray} = CresSlice.actions

export default CresSlice.reducer