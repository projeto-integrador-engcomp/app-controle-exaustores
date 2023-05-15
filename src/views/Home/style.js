import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: #000000;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    height: 20rem;
    width: 20rem;
    border-radius: 8px;
    text-align: center;
    padding: 24px;

    img { 
      width: 10rem;
    }

    h1 {
      color: #8c52e5;
      font-size: 1.55em;
      margin-bottom: 10px;
    }

    input {
      height: 36px;
      width: 100%;
      border: 2px solid #000000;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      font-weight: bold;
      margin: 5px 0;
      padding: 0 6px;
      transition: 0.6s;

      &:focus {
        border: 2px solid #000000;
        outline: none;
      }
    }

    input[id="signin_system"] {
      background: #8c52e5;
      color: #F9F9F9;
    
      &:hover {
        background: #68DE5A;
        color: #000000;
      }
    }

    input[id="signup_system"] {
      background: #68DE5A;

      &:hover {
        background: #8c52e5;
        color: #F9F9F9;
      }
    }
  }
`;