import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const Wrapper = styled.section`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid #eee;
    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

const DisplayUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //   console.log(users);

  /** #8 */
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      {users.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <MdDeleteForever
              className="delete-icon"
              onClick={() => deleteUser(id)}
            />
          </li>
        );
      })}
    </Wrapper>
  );
};

export default DisplayUsers;
