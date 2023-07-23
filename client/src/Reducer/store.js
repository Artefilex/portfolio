import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./skillreducer"
export default configureStore({
  reducer: {
    skills: skillReducer,
  }
} );




