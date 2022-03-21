import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <a href="./Main">
        <img src="/images/logo.svg" alt="" srcset="" />
      </a>
      <MainGroup>
        <div>Model X</div>
        <div>Model Y</div>
        <div>Model S</div>
      </MainGroup>
      <RightSection>
        <a href="./Shop">Shop</a>
        <a href="./Tesla">Tesla</a>
        <a href="./Account">Account</a>

        <MenuIconContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 14 14"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </MenuIconContainer>
      </RightSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-height: 60px;
  justify-content: space-between;
  padding: 0 20px;
`;
const MainGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightSection = styled.div`
  display: flex;
  a {
    font-weight: 600;
    padding: 0 10px;
    padding-left: 10px;
    text-decoration: none;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
