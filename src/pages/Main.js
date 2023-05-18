import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import styled from "styled-components";

const MainContainer = styled.section`
    width: 100%;
    max-width: 82rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Main = () => {
    return (
    <MainContainer>
      <ProductList />
    </MainContainer>
  )
};
  
  export default Main;




