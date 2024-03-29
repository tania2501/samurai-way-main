import { Reducer } from "redux";
import { UserType } from "../components/users/Users";
import { ActionsTypes, StateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../dal/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING";

export type MainUserType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  isFollowed: Array<number>;
};
const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowed: [],
};

export const usersReducer: Reducer<MainUserType, ActionsTypes> = (
  state = { ...initialState },
  action: ActionsTypes
): MainUserType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.users };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING:
      return { ...state, isFollowed: action.isFollowed ? [...state.isFollowed, action.userId] : state.isFollowed.filter( id => id !== action.userId) };
    default:
      return state;
  }
};
export const follow = (userId: number) => {
  return {
    type: FOLLOW,
    userId,
  } as const;
};
export const unfollow = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId,
  } as const;
};
export const setUsers = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const;
};
export const setCurrentPage = (page: number) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  } as const;
};
export const setTotalCount = (users: number) => {
  return {
    type: SET_TOTAL_COUNT,
    users,
  } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const;
};
export const toggleIsFollowing = (isFollowed: boolean, userId: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    isFollowed,
    userId
  } as const;
};
export const getUsers = (setCurrentPage: (page: number) => void, pageSize: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    usersAPI
      .getUsers(setCurrentPage, pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
      });
  };
};
export const changeUsersPage = (page: number, pageSize: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    usersAPI.onChangeUsersPage(page, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
    });
  }
};
export const followUser = (id: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    dispatch(toggleIsFollowing(true, id))
    usersAPI.getFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleIsFollowing(false, id))
    });
  }
}
export const unFollowUser = (id: number): ThunkAction<Promise<void>, StateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    dispatch(toggleIsFollowing(true, id))
    usersAPI.unFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleIsFollowing(false, id))
    });
  }
}

