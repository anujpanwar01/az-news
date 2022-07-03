import styled from "styled-components";

export const NewsCards = styled.div`
  margin-bottom: 2rem;
  display: flex;
  width: 900px;
  border-radius: 1rem;
  border: 1px solid gray;
  overflow: hidden;
  .img-container {
    width: 70rem;
    margin-right: 2rem;
    ${"" /* height: 10rem; */}
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-cotainer {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    a {
      font-size: 1.8rem;
      text-decoration: none;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.7;
      letter-spacing: 1px;
      margin-top: 1rem;
    }
  }
  .source {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    padding: 1.4rem 1rem;
    button:not(:last-child) {
      margin-right: 2rem;
      cursor: pointer;
    }
    .share-news {
      background: transparent;
      border: none;
    }
    p {
      font-size: 1.2rem;
      margin: 0 2rem;
    }
    time {
      font-size: 1.2rem;
    }
  }
`;
