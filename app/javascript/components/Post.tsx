import React from "react";
import { Card } from "react-bootstrap";

interface PostProps {
  id: string;
  title: string;
  author: string;
  notes: string;
  mediaType: string;
}

const Post: React.FC<PostProps> = ({ id, title, author, mediaType, notes }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {mediaType} posted by {author}
        </Card.Subtitle>
        <Card.Text>{notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
