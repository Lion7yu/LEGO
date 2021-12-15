import Layout from "components/Layout";
import styled from "styled-components";

const TagSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  > ol {
    margin: 0 -12px;
    > li {
      background: rgb(90, 90, 91);
      color: #fff;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid;
    color: #666;
  }
`;
const NoteSection = styled.section`
  background: rgb(140, 140, 140);
  padding: 0px 16px;
  font-size: 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
      color: #fff;
    }
    > input {
      color: rgb(235, 232, 230);
      display: block;
      width: 100%;
      height: 48px;
      background: none;
      border: none;
      font-family: TRDSR;
    }
  }
`;
const CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: rgb(55, 55, 55);
    > li {
      color: #fff;
      width: 50%;
      text-align: center;
      padding: 10px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: red;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
const NumberPadSection = styled.section``;

function Export() {
  return (
    <div>
      <Layout></Layout>
      Export
    </div>
  );
}
export default Export;
