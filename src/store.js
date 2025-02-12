import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  newAuctionReducer,
  auctionDetailsReducer,
  auctionReducer,
  auctionsReducer,
} from "./reducers/auctionReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";
// Persist configuration
// const persistConfig = {
//   key: "root", // Key to store the state in storage
//   storage, // Storage to use (localStorage)
//   whitelist: ["user", "cart"], // Only persist the user and cart state
// };

// Combine all reducers
const reducer = {
  auctions: auctionsReducer,
  auctionDetails: auctionDetailsReducer,
  newAuction: newAuctionReducer,
  auction: auctionReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
};

// Check if user is in local storage and create user object from that
const userFromStorage = localStorage.getItem("token")
  ? {
      token: localStorage.getItem("token"),
      isAuthenticated: true,
      user: {},
    }
  : {
      isAuthenticated: false,
      user: null,
      token: null,
    };

// Initial state
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  user: userFromStorage, // Initialized user state
};

// Create the Redux store with combined reducers, initial state, and middleware
const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
