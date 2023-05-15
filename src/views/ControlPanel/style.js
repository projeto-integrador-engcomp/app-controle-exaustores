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
  width: 350px;
  border-radius: 8px;
  text-align: center;
  padding: 24px;

  .title-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    heigth: 1.2rem;
    width: 16rem;
    margin-bottom: 6px;

    h5 {
      color: #8c52e5;
      font-size: 1.3em;
      margin: 0;
      padding: 0;
    }

    .logout-button-panel {
      color: #8c52e5;
      cursor: pointer;
      font-size: 24px;
      transition: 0.6s;
      
      &:hover {
        color: #68DE5A;
      }
    }
  }

  .name-switch-button-set {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    border-bottom: 2px solid #20202434;
    border-radius: 0.15rem; 
    padding: 0.5rem 0;

    :last-child {
      border-bottom: none;
    }

    .device-name {
      margin-right: 5rem;
    }

    .device-name, .device-switch-button {
      color: #000000;
      font-weight: bold;
    }
  }
}
`;