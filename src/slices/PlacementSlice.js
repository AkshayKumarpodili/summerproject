import { createSlice } from "@reduxjs/toolkit";

export const PlaceSlice = createSlice({
    name:'placement',
    initialState: [],
    reducers: {
        //here state = initialstate Array in above
        addPlacementArray: (state,action) => {
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const {addPlacementArray} = PlaceSlice.actions

export default PlaceSlice.reducer