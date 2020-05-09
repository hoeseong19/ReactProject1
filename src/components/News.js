import React from "react";
import { useSelector } from "react-redux";

import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';

const LimitedP = styled.p`
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap; 
  width: 80vw;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function NewsItem({news}) {
  const { headline, image, summary, url } = news;
  return (
    <Media as="li">
      <img
        width={128}
        height={128}
        className="mr-3"
        src={image}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{headline}</h5>
        <LimitedP>
          {summary}
        </LimitedP>
        <Button variant="secondary" href={url}>Site</Button>
      </Media.Body>
    </Media>
  )
}

export default function News() {
  const news = useSelector(state => state.selected.news);

  if (!news) {
    return (<div>Loading</div>);
  }
  return (
    <ListGroup className="list-unstyled">
      {news.map((item) => (
        <ListGroup.Item key={item.id}>
          <NewsItem news={item}/>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}