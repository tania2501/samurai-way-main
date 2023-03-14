import React from "react";
import { store, StoreType } from "./mainRedux/store-redux";

export const StoreContext = React.createContext<StoreType>(store);