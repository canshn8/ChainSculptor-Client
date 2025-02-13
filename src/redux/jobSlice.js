import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import request,{reqUrl} from '../request'; 


const initialState = {
  jobs: [],
  allJobs: [],
  page: 1,
  loading: false,
  searchQuery: '',
  filters: {
    categories: [],
    jobType: '',
    status: 'Open',
    escrowStatus: 'Pending',
    paymentStatus: 'Pending',
    minBudget: 0,
    maxBudget: 0,
  },
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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setJobs, setPage, setLoading, setSearchQuery, setFilters } = jobSlice.actions;

export const fetchJobs = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${reqUrl}`+'/job/getJobs');
    const { data } = response;
    
    if (Array.isArray(data.data)) {
      const { searchQuery, filters } = getState().job;
      let filteredJobs = data.data;
      
      if (filters.categories.length) {
        filteredJobs = filteredJobs.filter(job => filters.categories.some(cat => job.categories.includes(cat)));
      }
      
      if (filters.jobType) {
        filteredJobs = filteredJobs.filter(job => job.jobType === filters.jobType);
      }
      
      if (filters.status) {
        filteredJobs = filteredJobs.filter(job => job.status === filters.status);
      }
      
      if (filters.escrowStatus) {
        filteredJobs = filteredJobs.filter(job => job.escrowStatus === filters.escrowStatus);
      }
      
      if (filters.paymentStatus) {
        filteredJobs = filteredJobs.filter(job => job.paymentStatus === filters.paymentStatus);
      }
      
      if (filters.minBudget || filters.maxBudget) {
        filteredJobs = filteredJobs.filter(job => 
          job.budget.min >= filters.minBudget && job.budget.max <= filters.maxBudget
        );
      }
      
      if (searchQuery) {
        filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      
      dispatch(setJobs({ jobs: filteredJobs.slice(0, 6), allJobs: filteredJobs }));
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
