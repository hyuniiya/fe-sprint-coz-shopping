import { useEffect,useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% / 4);
    height: 13rem;

  .img {
    position: relative;
    width: 100%;
    height: 13rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
    cursor: pointer;

    img {
      width: 100%;
      height: 13rem;
      border-radius: 1.2rem;
    }

    #icon {
      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;
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

  @media (max-width: 768px) {
    width: calc(100% / 2);

    .img {
      img {
        width: 100%;
        height: 12rem;
      }
    }

    .first {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      margin-top: 0.3rem;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    .img {
      img {
        width: 100%;
        height: 10rem;
      }
    }

    .first {
      font-size: 0.9rem;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
    }

    p {
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-left: 0.4rem;
    }
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 40rem;
  height: 20rem;
  border-radius: 12px;
  display: flex;
 
  background-color: #ffffff;
  padding: 1rem;
`;

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 17rem;
  right: 40rem;
  font-size: 1.5rem;
  color: #777777;
  cursor: pointer;
`;

const ProductCard = ({data}) => {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarks')) || []
  );
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };


  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);
  
  const handleBookmarkClick = () => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.title !== data.title);
    const message = updatedBookmarks.length === bookmarks.length ? '추가' : '삭제';

    setBookmarks((prevBookmarks) =>
      prevBookmarks.length === updatedBookmarks.length ? [...prevBookmarks, data] : updatedBookmarks
    );

    console.log(`북마크가 ${message}되었습니다.`);
  };

  const url = data.image_url ? data.image_url : data.brand_image_url;

  let content = '';
  if (data.type === 'Category') content = <div>{`# ${data.title}`}</div>;
  else if (data.type === 'Brand') content = <div>{data.brand_name}</div>;
  else content = <div>{data.title}</div>;

  const numberComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const CommaPrice = data.price ? numberComma(data.price) : '';
  const CommaFollower = data.follower ? numberComma(data.follower) : '';

  const isBookmarked = bookmarks.some((bookmark) => bookmark.title === data.title);

  return (
    <ItemContainer>
      <div className="img">
        <img 
        src={url} 
        alt={data.title} 
        onClick={handleImageClick} />

        <FontAwesomeIcon
          id="icon"
          icon={faStar}
          size="lg"
          color={isBookmarked ? '#FFD361' : 'rgba(223, 223, 223, 0.81)'}
          onClick={handleBookmarkClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className="first">
        {content}
        {data.type === 'Brand' && <div>관심고객수</div>}
        {data.discountPercentage && <span>{`${data.discountPercentage}%`}</span>}
      </div>

      {data.sub_title && <p>{data.sub_title}</p>}
      {data.price && <p id="right">{`${CommaPrice}원`}</p>}
      {data.follower && <p id="right">{CommaFollower}</p>}

      {isModalOpen && (
        <ImageModal>
          <ModalContent>
            <img src={data.image_url || data.brand_image_url} alt={data.title} />
            <CloseButton icon={faTimes} onClick={() => setIsModalOpen(false)} />
            {/* Render other content for the modal */}
          </ModalContent>
        </ImageModal>
      )}
    </ItemContainer>
  );
};

export default ProductCard;