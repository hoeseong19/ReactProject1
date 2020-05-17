import React from "react";
import { useSelector } from "react-redux";

import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function NewsItem({news}) {
  const { headline, image, summary, url, datetime } = news;
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
        <p>
          {summary}
        </p>
        <small>published at {new Date(datetime*1000).toISOString().slice(0, 10)}</small>
        <br/>
        <Button variant="secondary" href={url}>Read More</Button>
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