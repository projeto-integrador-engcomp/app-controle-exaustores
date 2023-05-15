import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: #000000;

  .card {
    background: #FFFFFF;
    width: 350px;
    border-radius: 8px;
    text-align: center;
    padding: 24px;

    h5 {
      color: #8c52e5;
      font-size: 1.4em;
      margin-bottom: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        height: 36px;
        width: 100%;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 5px 0;
        padding: 0 6px;
      }

      input[type="text"], input[type="email"], input[type="password"] {
        border: 1px solid #c2c9d6;
        
        &:focus {
          border: 2px solid #68DE5A;
          outline: none;
        }
      }

      input[type="submit"] {
        background: #68DE5A;
        border: none;
        font-weight: bold;
        margin-top: 15px;
        transition: 0.6s;

        &:hover {
          color: #F9F9F9;
          background: #8c52e5;
          cursor: pointer;
        }
      }
    }
  }
`