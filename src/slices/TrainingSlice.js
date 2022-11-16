import { createSlice } from "@reduxjs/toolkit";

export const TrainSlice = createSlice({
    name:'training',
    initialState: [],
    reducers: {
        //here state = initialstate Array in above
        addTrainingArray: (state,action) => {
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const {addTrainingArray} = TrainSlice.actions

export default TrainSlice.reducer