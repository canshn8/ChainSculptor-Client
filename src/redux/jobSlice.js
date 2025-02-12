import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  allJobs: [],
  page: 1,
  loading: false,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
      state.allJobs = action.payload.allJobs;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setJobs, setPage, setLoading } = jobSlice.actions;

export const fetchJobs = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('http://localhost:8000/api/job/getJobs');
    const data = await response.json();
    console.log(data); 

    if (Array.isArray(data.data)) {
      dispatch(setJobs({ jobs: data.data.slice(0, 6), allJobs: data.data }));
    } else {
      throw new Error('API yanıtı geçerli bir dizi değil');
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    dispatch(setLoading(false));
  }
};


export default jobSlice.reducer;
