import { createSlice } from "@reduxjs/toolkit";

const userSymptomsSlice = createSlice({
  name: "userSymptoms",
  initialState: {
    userSymptoms: null,
  },
  reducers: {
    setUserSymptoms: (state, action) => {
      state.userSymptoms = action.payload;
    },
  },
});
