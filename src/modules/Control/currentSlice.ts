import {ResultsResponse} from "../../api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {
    current: ResultsResponse | null,
} = {
    current: null,
};

export const currentSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<ResultsResponse>) => {
            state.current = action.payload;
        },
        updateLeft: (state,  action: PayloadAction<number>) => {
            if (state.current) {
                state.current.leftTeam.score = action.payload;
            }
        }
    }
})

export const { update, updateLeft } = currentSlice.actions

export default currentSlice.reducer;