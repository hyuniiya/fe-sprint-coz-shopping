import { Link } from "react-router-dom";
import { useState } from "react";

import Dropdown from "./Dropdown";
import logo from "../img/logo.png";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HeaderTitleBox = styled.header`
    height: 7rem;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    .header-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100rem;
        padding: 0 8rem;
    }

    .link {
        color: #333;
        text-decoration: none;
    }

    .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
            display: block;
            width: 5.5rem;
            height: 3rem;
            margin-right: 1.2rem;
        }
        span {
            font-size: 3.2rem;
            font-weight: 700;
        }
    }

    .menu-btn {
        cursor: pointer;
    }

`;

const Header = () => {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    return (
        <HeaderTitleBox>
            <div className="header-wrapper">
                <Link to="/" className="link" >
                    <h1 className="logo">
                        <img src={logo} alt="logo" />
                        <span>COZ Shopping</span>
                    </h1>
                </Link>
                <div className="menu-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="3x"/>
                </div>
               {isOpen && (
                <Dropdown toggleMenu={toggleMenu} />
            )}
            </div>
        </HeaderTitleBox>
    );
};

export default Header;