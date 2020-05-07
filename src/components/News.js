import React from "react";
import { useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsItem({news}) {
  const { headline, image, summary, url } = news;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{headline}</Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
        <Button variant="success">
          <a href={url}>Go somewhere</a>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default function News() {
  const news = useSelector(state => state.selected.news);

  if (!news) {
    return (<div>Loading</div>);
  }
  return (
    <div>
      {news.map((item) => (
        <NewsItem key={item.id} news={item}/>
      ))}
    </div>
  );
}