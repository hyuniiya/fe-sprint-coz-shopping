import { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 10rem;
    height: 12rem;

        img {
            box-sizing: border-box;
            width: 10rem;
            height: 12rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            cursor: pointer;
        }
        
        .first {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 4px;
            font-weight: 800;
            font-size: 1rem;
            line-height: 19px;
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
        }    
`;

const ProductCard = ({data}) => {
    // const [isBookmark, setBookmark] = useState(false);
    const url = data.image_url ? data.image_url : data.brand_image_url;

    let content = '';
    if (data.type === 'Category') content = <div>{`# ${data.title}`}</div>;
    else if (data.type === 'Brand') content = <div>{data.brand_name}</div>;
    else content = <div>{data.title}</div>;

    return (
          <ItemContainer>
            <div className="img">
            <img
              src={url}
              alt={data.title} 
            />
            <FontAwesomeIcon icon={faStar} size="2x" color="#d3d3d3"/>
             </div>
            <div className="first">
              {content}
              {data.type === "Brand" && <div>관심고객수</div>}
              {data.discountPercentage && (
                <span>{`${data.discountPercentage}%`}</span>
              )}
            </div>
    
            {data.sub_title && <p>{data.sub_title}</p>}
            {data.price && <p>{`${data.price}원`}</p>}
            {data.follower && <p>{data.follower}</p>}
          </ItemContainer>
      )};

export default ProductCard;