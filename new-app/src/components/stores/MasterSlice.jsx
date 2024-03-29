import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Email: null,
  Token:null,
  user:{
    email: "",
    password : "",
    role:"user"
  },
  userDetails:null,
  adminDetails:null,
  LoanDetails:null,
  TrackedLoanDetails:null,
  adminpresent:false,
  AllLoanDetails:{
      trackId:0,
      loanType:"",
      applicantName:"",
      applicantAddress:"",
      applicantMobile:"",
      applicantEmail:"Email",
      applicantAadhaar:"",
      applicantPan:"",
      applicantSalary:"",
      loanAmountRequired:"",
      loanRepaymentMonths:"",
      status:""
  },
  appliedDetails:null
};
const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addEmail: (state, action) => {
      console.log(action);
      state.Email = action.payload;
    },
    addToken: (state, action) => {
      state.Token = action.payload;
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addLoanDetails: (state, action) => {
      state.LoanDetails = action.payload;
    },
    addAllLoanDetails: (state, action) => {
      state.AllLoanDetails = action.payload;
    },
    addTrackedLoanDetails: (state, action) => {
      state.TrackedLoanDetails = action.payload;
    },
    addAppliedDetails: (state, action) => {
      state.appliedDetails = action.payload;
    },
    addadminPresent: (state, action) => {
      state.adminpresent = action.payload;
    },
    removeAdminPresent: (state, action) => {
      state.adminpresent = action.payload;
    },
    deleteUser: (state) => {
      state.user = {
        email: "",
        password : "",
        role:""
      };
    },
    deleteEmail: (state, action) => {
      console.log(action);
      state.Email =null;
    },
    deleteToken: (state) => {
      state.Token = null;
    },
    deleteUserDetails: (state) => {
      state.userDetails = null;
    },
    
    
  },
});

export const {
  
  addUser,
  addEmail,
  addToken,
  addUserDetails,
  addLoanDetails,
  addTrackedLoanDetails,
  addAllLoanDetails,
  addadminPresent,
  addAppliedDetails,
  deleteUser,
  removeAdminPresent,
  deleteEmail,
  deleteToken,
  deleteUserDetails,
  
} = masterSlice.actions;

export default masterSlice.reducer;