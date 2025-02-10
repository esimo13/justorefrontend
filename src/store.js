// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   newProductReducer,
//   newReviewReducer,
//   productDetailsReducer,
//   productReducer,
//   productReviewsReducer,
//   productsReducer,
//   reviewReducer,
// } from "./reducers/productReducer";

// import {
//   newAuctionReducer,
//   auctionDetailsReducer,
//   auctionReducer,
//   auctionsReducer,
// } from "./reducers/auctionReducer";

// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//   profileReducer,
//   userDetailsReducer,
//   userReducer,
// } from "./reducers/userReducer";

// import { cartReducer } from "./reducers/cartReducer";
// import {
//   allOrdersReducer,
//   myOrdersReducer,
//   newOrderReducer,
//   orderDetailsReducer,
//   orderReducer,
// } from "./reducers/orderReducer";

// const reducer = combineReducers({
//   auctions: auctionsReducer,
//   auctionDetails: auctionDetailsReducer,
//   newAuction: newAuctionReducer,
//   auction: auctionReducer,
//   //product
//   products: productsReducer,
//   productDetails: productDetailsReducer,
//   user: userReducer,
//   profile: profileReducer,
//   forgotPassword: forgotPasswordReducer,
//   cart: cartReducer,
//   newOrder: newOrderReducer,
//   myOrders: myOrdersReducer,
//   orderDetails: orderDetailsReducer,
//   newReview: newReviewReducer,
//   newProduct: newProductReducer,
//   product: productReducer,
//   allOrders: allOrdersReducer,
//   order: orderReducer,
//   allUsers: allUsersReducer,
//   userDetails: userDetailsReducer,
//   productReviews: productReviewsReducer,
//   review: reviewReducer,
// });

// const userFromStorage = localStorage.getItem("token")
//    { token: localStorage.getItem("token") }
//   : null;

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//        JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//        JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
//   user: userFromStorage,
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
// import { createStore, combineReducers, applyMiddleware } from "redux";

// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   newProductReducer,
//   newReviewReducer,
//   productDetailsReducer,
//   productReducer,
//   productReviewsReducer,
//   productsReducer,
//   reviewReducer,
// } from "./reducers/productReducer";

// import {
//   newAuctionReducer,
//   auctionDetailsReducer,
//   auctionReducer,
//   auctionsReducer,
// } from "./reducers/auctionReducer";

// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//   profileReducer,
//   userDetailsReducer,
//   userReducer,
// } from "./reducers/userReducer";

// import { cartReducer } from "./reducers/cartReducer";
// import {
//   allOrdersReducer,
//   myOrdersReducer,
//   newOrderReducer,
//   orderDetailsReducer,
//   orderReducer,
// } from "./reducers/orderReducer";

// // Combine all reducers
// const reducer = combineReducers({
//   auctions: auctionsReducer,
//   auctionDetails: auctionDetailsReducer,
//   newAuction: newAuctionReducer,
//   auction: auctionReducer,
//   products: productsReducer,
//   productDetails: productDetailsReducer,
//   user: userReducer,
//   profile: profileReducer,
//   forgotPassword: forgotPasswordReducer,
//   cart: cartReducer,
//   newOrder: newOrderReducer,
//   myOrders: myOrdersReducer,
//   orderDetails: orderDetailsReducer,
//   newReview: newReviewReducer,
//   newProduct: newProductReducer,
//   product: productReducer,
//   allOrders: allOrdersReducer,
//   order: orderReducer,
//   allUsers: allUsersReducer,
//   userDetails: userDetailsReducer,
//   productReviews: productReviewsReducer,
//   review: reviewReducer,
// });

// // Check if user is in local storage and create user object from that
// const userFromStorage = localStorage.getItem("token")
//    {
//       token: localStorage.getItem("token"),
//       isAuthenticated: true,
//       user: {},
//     }
//   : {
//       isAuthenticated: false,
//       user: null,
//       token: null,
//     };

// // Initial state
// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//        JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//        JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
//   user: userFromStorage, // Initialized user state
// };

// // Middleware for Redux Thunk
// const middleware = [thunk];

// // Create the Redux store with combined reducers, initial state, and middleware
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
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
/*const userFromStorage = localStorage.getItem("token")
  ? {
      token: localStorage.getItem("token"),
      isAuthenticated: true,
      user: {},
    }
  : {
      isAuthenticated: false,
      user: null,
      token: null,
    };*/
const token = localStorage.getItem("token");

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
  // user: userFromStorage, // Initialized user state
  auth: { token },
};

// Create the Redux store with combined reducers, initial state, and middleware
const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
