import styled from "styled-components";

import { TitleLogo } from "components/molecules/sidebar/TitleLogo";
import { MenuArea } from '../molecules/sidebar/MenuArea';

export const Sidebar = () => {
  return ( 
    <SContainer>
      <TitleLogo/>
      <MenuArea/>
    </SContainer>
  )
}

const SContainer = styled.section`
  width: 240px;
  height: 100vh;
  border-right: 1px solid #F6F8FA;
  position: relative;
  padding-left: 40px;
`;

const SBottom = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background-color:#F6F8FA ; 
  padding: 10px 0;
  padding-left: 20px;
`;
