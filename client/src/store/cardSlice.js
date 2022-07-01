import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCards = createAsyncThunk(
    "card/axiosCard",
    async function (_, { rejectWithValue }) {
        try {
            const response = await axios("http://127.0.0.1:3333/cards");
            if (response.statusText !== "OK") {
                throw new Error("Server Error!");
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
};

const cardlice = createSlice({
    name: "card",
    initialState: {
        card: [],
        status: null,
        error: null,
    },
    reducers: {
        addCard(state, action) {
            state.card.push(action.payload);
        },
        deleteCard(state, action) {
            const { id } = action.payload;
            const index = state.card.indexOf(state.card.find((e) => e.id === id));
            state.card.splice(index, 1);
        },
        updateCard(state, action) {
            const { title, text, price } =
                action.payload;
            state.card = state.card.map((e) => {
                if (e.id === id) {
                    return {
                        ...e,
                        title: title,
                        text: text,
                        price: price,
                    };
                }
                return e;
            });
        },
    },
    extraReducers: {
        [axioscard.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [axioscard.fulfilled]: (state, action) => {
            state.status = "resolve";
            state.card = action.payload;
        },
        [axioscard.rejected]: setError,
    },
});

export const { addCard } = cardSlice.actions;
export const { updateCard } = cardSlice.actions;
export const { deleteCard } = cardSlice.actions;
export default cardSlice.reducer;