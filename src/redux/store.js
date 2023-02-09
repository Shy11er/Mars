import { configureStore } from "@reduxjs/toolkit";
import MusicSlice from "./slice/Music";

export const store = configureStore({
  reducer: {
    music: MusicSlice,
  },
});
