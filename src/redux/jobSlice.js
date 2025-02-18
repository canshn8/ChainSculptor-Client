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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload.jobs;
      state.allJobs = action.payload.allJobs;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
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
    const response = await axios.get(`${reqUrl}/job/getJobs`);
    const { data } = response;

    if (!data || !Array.isArray(data.data)) {
      throw new Error('API yanıtı geçerli bir dizi değil');
    }

    const { searchQuery, filters } = getState().job;
    
    console.log('Redux Store’daki Filtreler:', filters);
    console.log('Redux Store’daki Arama Sorgusu:', searchQuery);

    let filteredJobs = data.data;

    if (filters.categories.length) {
      filteredJobs = filteredJobs.filter(job => 
        filters.categories.some(cat => job.categories.includes(cat))
      );
      console.log('Kategoriye göre filtrelendi:', filteredJobs);
    }

    if (filters.jobType) {
      filteredJobs = filteredJobs.filter(job => job.jobType === filters.jobType);
      console.log('Job Type’e göre filtrelendi:', filteredJobs);
    }

    if (filters.status) {
      filteredJobs = filteredJobs.filter(job => job.status === filters.status);
      console.log('Status’a göre filtrelendi:', filteredJobs);
    }

    if (filters.escrowStatus) {
      filteredJobs = filteredJobs.filter(job => job.escrowStatus === filters.escrowStatus);
      console.log('Escrow Status’a göre filtrelendi:', filteredJobs);
    }

    if (filters.paymentStatus) {
      filteredJobs = filteredJobs.filter(job => job.paymentStatus === filters.paymentStatus);
      console.log('Payment Status’a göre filtrelendi:', filteredJobs);
    }

    if (filters.minBudget || filters.maxBudget) {
      filteredJobs = filteredJobs.filter(job =>
        job.budget.min >= (filters.minBudget || 0) && job.budget.max <= (filters.maxBudget || Infinity)
      );
      console.log('Bütçeye göre filtrelendi:', filteredJobs);
    }

    if (searchQuery) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('Arama Sorgusuna göre filtrelendi:', filteredJobs);
    }

    dispatch(setJobs({ jobs: filteredJobs.slice(0, 6), allJobs: filteredJobs }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    dispatch(setLoading(false));
  }
};


export const addJob = (jobData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await request('POST', '/job/addJob', jobData);
    console.log('Response from server:', response +" "+ 'Job Data From user forms : ' , jobData);

    
    if (response) {
      dispatch(fetchJobs());
    } else {
      console.error('No job data or operation was unsuccessful');
      throw new Error('Failed to add job');
    }
  } catch (error) {
    console.error('Error adding job:', error);
  } finally {
    dispatch(setLoading(false));
  }
};



export default jobSlice.reducer;
