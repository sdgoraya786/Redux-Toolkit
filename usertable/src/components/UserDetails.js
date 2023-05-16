import React from "react";
import styled from "styled-components";
// import DeleteAllUsers from "./DeleteAllUsers";
/** #6 */
import { fakeUsersData } from "../api";
import { useDispatch } from "react-redux";
import { addUser, removeAllUsers } from "../store/slice/UserSlice";
import DisplayUsers from "./DisplayUsers";

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 2rem;
  }

  .contant ul {
    list-style: none;
  }
  .delete-icon {
    font-size: 2rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }

  .clear-all-btn {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
    .btn {
      text-transform: capitalize;
      background: linear-gradient(135deg, #735bf9 0%, #d9532b 100%);
    }
  }
`;
const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = () => {
    // console.log(fakeUsersData());
    dispatch(addUser(fakeUsersData()));
  };
  return (
    <Wrapper>
      <div className="contant">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          {/* onClick={() => addNewUser(fakeUsersData()) ese b kr sakty hen} */}
          <button className="btn add-btn" onClick={() => addNewUser()}>
            Add New User
          </button>
        </div>
        <ul>
          <DisplayUsers /> {/* #7 */}
        </ul>
        <hr />
        {/* #9 */}
        <div className="clear-all-btn">
          <button className="btn" onClick={() => dispatch(removeAllUsers())}>
            clear All
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserDetails;
