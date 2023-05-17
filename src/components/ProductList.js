import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";

const Label = styled.div`
  width: 179px;
  height: 38px;
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  

  color: #000000;
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
      <>
        <Label>상품 리스트</Label>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <ItemList products={products} />
        )}
      </>
    );
  }
  
  

