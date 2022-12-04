import { configureStore } from "@reduxjs/toolkit";
import CresReducer  from "./slices/CoursesSlice";
import InternReducer from "./slices/InternshipSlice";
import TrainingReducer from "./slices/TrainingSlice";
import PlacementReducer from "./slices/PlacementSlice";


export const store = configureStore({
    reducer : {
        Cre: CresReducer,
        Intern: InternReducer,
        Placement: PlacementReducer,
        Training: TrainingReducer
        
    }
})

