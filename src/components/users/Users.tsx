import { NavLink } from "react-router-dom";
import ava from "../../assets/img/user.jpg";
import { Preloader } from "../common/Preloader";
import s from "./Users.module.css";

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
  onChange: (page: number) => void;
  isFetching: boolean;
  isFollowed: Array<number>;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
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
        {props.users.map((u) => {
          return (
            <div key={u.id} className={s.userItem}>
              <span className={s.avatar}>
                <div className={s.avatar}>
                  <NavLink to={"/samurai-way-main/profile/" + u.id}>
                    <img src={u.photos.small ? u.photos.small : ava} alt="" />
                  </NavLink>
                </div>
                <div className={s.button}>
                  {u.followed ? (
                    <button
                      disabled={props.isFollowed.some((id) => id === u.id)}
                      onClick={() => {
                        props.unfollowUser(u.id);
                      }}
                    >
                      Followed
                    </button>
                  ) : (
                    <button
                      disabled={props.isFollowed.some((id) => id === u.id)}
                      onClick={() => {
                        props.followUser(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </span>
              <span className={s.info}>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
              </span>
            </div>
          );
        })}
        <div>
          {props.currentPage > 1 && <button onClick={()=>props.onChange(curP - 1)}>Prev</button>}
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
          <button onClick={()=>props.onChange(curP + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};
