import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  margin-top: 3rem;

    h2 {
        top: 8rem;
        left: 10rem;
        position: absolute;
        transform: translateX(10%);
        font-weight: 600;

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
  

