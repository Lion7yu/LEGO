import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icons";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  background: rgb(255, 207, 0);
  > ul {
    display: flex;
    width: 60%;
    border: 1px solid red;
    > li {
      flex: 1;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <div className="logoWrapper">
        <NavLink to="/user" activeClassName="selected">
          <Icon name="logo" />
        </NavLink>
      </div>
      <ul>
        {/* <li>
        </li> */}
        <li>
          <NavLink to="/lego" activeClassName="selected">
            Lego
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/Lion7yu">GitHub</a>
        </li>
        <li>
          <NavLink to="/export" activeClassName="selected">
            Export
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
