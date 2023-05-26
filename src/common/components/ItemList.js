import styled from "styled-components";
import ProductCard from "./ProductCard";

const ItemBox = styled.div`
  display: flex;
  gap: 5rem;
`;

const ItemList= ({ products }) =>{
  return (
    <ItemBox>
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </ItemBox>
  );
}

export default ItemList;
