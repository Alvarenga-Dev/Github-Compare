import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 2em 0;
`;

export const Repository = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    background: #fff;
    border-radius: .5em;
    margin: 0 1em;

    header {
      padding: 1.6em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 64px;
    }

    strong {
      font-size: 1.2em;
      margin: .7em;
    }

    small {
      font-size: .9em;
      color: #666;
    }

    ul {
      list-style: none;

      li {
        font-weight: bold;
        padding: .8em 1em;

        small {
          font-weight: normal;
          font-size: .8em;
          font-style: italic;
          color: #999;
        }

        &:nth-child(2n - 1) {
          background: #f5f5f5;
        }
      }
    }
`;
