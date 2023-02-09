import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMusics = createAsyncThunk(
  "music/fetchMusicsData",
  async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fbca8a04f8msh354fe5934e12c41p1345bdjsndfb2375ea4c9",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    fetch(
      "https://shazam-core.p.rapidapi.com/v1/search/multi?query=metallica&search_type=SONGS_ARTISTS",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const MusicSlice = createSlice({
  name: "music",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMusics.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchMusics.fulfilled, (state, actions) => {
      state.items = actions.payload;
      state.status = "success";
    });
    builder.addCase(fetchMusics.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export default MusicSlice.reducer;
