import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const DropdownMenu = styled.nav `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 4rem;
    
    
    :after { 
        content:""; 
        position: absolute; 
        top: -30px; 
        right: 65px; 
        border-left: 20px solid transparent; 
        border-right: 20px solid transparent; 
        border-bottom: 30px solid #fff;
    }

    ul {
    width: 13rem;
    margin-left: 8rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px -2px 8px 5px rgba(0, 0, 0, 0.1);
    


    > li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        height: 5rem;
        &:not(:first-of-type) {
            border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
    }

    .link {
        color: #333;
        text-decoration: none;
    }
}
`;

function Dropdown() {
    return (
        <DropdownMenu>
            <ul>
                <li>OOO님, 안녕하세요!</li>
                <li>
                    <Link to="/products/list" className="link">
                        <FontAwesomeIcon icon={faGift} />
                        상품리스트 페이지
                    </Link>
                </li>
                <li>
                    <Link to="/bookmark" className="link">
                    <FontAwesomeIcon icon={faStar} />
                        북마크 페이지
                    </Link>
                </li>
            </ul>
    </DropdownMenu>
    );
};

export default Dropdown;