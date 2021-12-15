import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div``;

const Main = styled.div``;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
