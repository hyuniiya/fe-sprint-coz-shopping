import { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ItemContainer = styled.div`
    left: -5rem; 
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% / 4);
    height: 16rem;

  .img {
    position: relative;
    width: 18rem;
    height: 16rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
    cursor: pointer;

    img {
      width: 20rem;
      height: 16rem;
      border-radius: 1.2rem;
    }

    #icon {
      position: absolute;
      bottom: 1rem;
      right: -0.5rem;
      color: rgba(223, 223, 223, 0.81);
    }
  }

  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 19px;
    margin-top: 0.7rem;
    margin-left: 1rem;
    cursor: pointer;
  }

  span {
    color: #452cdd;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 4px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  #right {
    justify-content: flex-end;
  }
`;

const ProductCard = ({data}) => {
    // const [isBookmark, setBookmark] = useState(false);
    const url = data.image_url ? data.image_url : data.brand_image_url;

    let content = '';
    if (data.type === 'Category') content = <div>{`# ${data.title}`}</div>;
    else if (data.type === 'Brand') content = <div>{data.brand_name}</div>;
    else content = <div>{data.title}</div>;

    const numberComma =(number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    const CommaPrice = data.price ? numberComma(data.price) : "";
    const CommaFollower = data.follower ? numberComma(data.follower) : "";
    return (
          <ItemContainer>
            <div className="img">
            <img src={url} alt={data.title} />
            <FontAwesomeIcon id="icon" icon={faStar} size="lg" color="rgba(223, 223, 223, 0.81)"/>
             </div>
            <div className="first">
              {content}
              {data.type === "Brand" && <div>관심고객수</div>}
              {data.discountPercentage && (
                <span>{`${data.discountPercentage}%`}</span>
              )}
            </div>
    
            {data.sub_title && <p>{data.sub_title}</p>}
            {data.price && <p id="right">{`${CommaPrice}원`}</p>}
            {data.follower && <p id="right">{CommaFollower}</p>}
          </ItemContainer>
      )};

export default ProductCard;