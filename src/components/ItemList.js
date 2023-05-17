import styled from "styled-components";
import ProductCard from "./ProductCard";

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  gap: 24px;
  width: 1128px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemList= ({ products }) =>{
  return (
    <ItemBox>
      {products?.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </ItemBox>
  );
}

export default ItemList;
