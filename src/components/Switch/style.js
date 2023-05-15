import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 70px;
  background-color: #000000;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  position: relative;

  .switch-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    background-color: #68DE5A;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    padding: 7px 12px;
    position: absolute;
    transition: all 0.2s ease;
    left: 30px;
  }

  .disabled {
    background-color: #F23054;
    left: 2px;
  }
`