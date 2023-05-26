import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
  font-size: 26px;
  line-height: 29px;
  color: #000;
  margin-top: 1rem;

  h2 {
    font-weight: 600;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;

    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;

    h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  
    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = () => {
      return fetch('http://cozshopping.codestates-seb.link/api/v1/products')
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setProducts(data);
        })
        .catch((error) => {
          console.log('Error fetching products:', error);
          setIsLoading(false);
        });
    };
  
    return (
        <ProductListContainer>
        <h2>상품 리스트</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ItemList products={products.slice(0, 4)} />
        )}
      </ProductListContainer>
    );
  };
  

