import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  width: 1280px;
`;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerLeftDivSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenterDiv = styled.span`
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerCenterDivSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;

const ContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightDivSpan = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <ContainerLeftDivSpan>TOPICS</ContainerLeftDivSpan><ContainerLeftDivSpan>SEARCH</ContainerLeftDivSpan>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerCenterDivSpan>GENERAL</ContainerCenterDivSpan><ContainerCenterDivSpan>BROWNBAG</ContainerCenterDivSpan><ContainerCenterDivSpan>RANDOM</ContainerCenterDivSpan><ContainerCenterDivSpan>MUSIC</ContainerCenterDivSpan><ContainerCenterDivSpan>ANNOUNCEMENTS</ContainerCenterDivSpan>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <ContainerRightDivSpan>LOG IN</ContainerRightDivSpan>
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;