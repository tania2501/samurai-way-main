import { NavLink } from "react-router-dom";
import ava from "../../assets/img/users.png";
import { Preloader } from "../common/Preloader";
import s from "./Users.module.css";
import { profileAPIdel, profileAPIpost} from "../../dal/api";

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
  status: null | string;
  followed: boolean;
};
export type UsersType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onChange: (page: number) => void;
  isFetching: boolean;
  toggleIsFollowing: (isFollowed: boolean, id: number) => void
  isFollowed: Array<number>
};

export const Users = (props: UsersType) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 3 < 0 ? 0 : curP - 3;
  let curPL = curP + 3;
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <>
      <div className={props.isFetching ? s.mainContent : s.offLoader}>
        <Preloader isFetching={props.isFetching} />
      </div>
      <div className={props.isFetching ? s.offLoader : ""}>
        <div>
          {" "}
          {slicedPages.map((p) => {
            return (
              <button
                onClick={() => props.onChange(p)}
                key={p}
                className={props.currentPage === p ? s.selected : ""}
              >
                {p}
              </button>
            );
          })}
        </div>
        {props.users.map((u) => {
          return (
            <div key={u.id}>
              <span>
                <div className={s.avatar}>
                  <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small ? u.photos.small : ava} alt="" />
                  </NavLink>
                </div>
                <div>
                  {u.followed ? (
                    <button disabled={props.isFollowed.some( id => id === u.id)}
                      onClick={() => {
                        props.toggleIsFollowing(true, u.id)
                        profileAPIdel.unFollow(u.id).then((data) => {
                          if (data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleIsFollowing(false, u.id)
                        });
                      }}
                    >
                      Followed
                    </button>
                  ) : (
                    <button disabled={props.isFollowed.some(id => id === u.id)}
                      onClick={() => {
                        props.toggleIsFollowing(true, u.id)
                        profileAPIpost.getFollow(u.id).then((data) => {
                          if (data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleIsFollowing(false, u.id)
                        });
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
