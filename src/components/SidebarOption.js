import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  // const [channels, loading, error] = useCollection(db.collection("rooms"));

  // console.log(channels);

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    
    // adding the channel names
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if(id){
        dispatch(enterRoom({
          roomId: id,
        }))
    }
  };

  return (
    <div>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>-</span>
            {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </div>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340c36;
  }

  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px;
  font-weight: 300;
`;
