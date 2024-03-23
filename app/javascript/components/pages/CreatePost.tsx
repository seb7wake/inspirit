import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import { useCreatePostMutation } from "../../generated/graphql";

const CreatePost = ({ user }) => {
  const [createPost] = useCreatePostMutation();
  const [title, setTitle] = useState("");
  const [mediaType, setMediaType] = useState("Book");
  const [notes, setNotes] = useState("");

  const create = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const res = await createPost({
      variables: {
        title: title,
        mediaType: mediaType,
        notes: notes,
        author: "1",
      },
    });
    console.log(res);
  };

  return (
    <div>
      Create Post
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mediaType">
          <Form.Select onChange={(e) => setMediaType(e.target.value)}>
            <option value="Book">Book</option>
            <option value="Podcast">Podcast</option>
            <option value="TV Show">TV Show</option>
            <option value="Movie">Movie</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes">
          <Form.Control
            type="text"
            onChange={(e) => setNotes(e.target.value)}
            placeholder="What did you learn? Share any thoughts about what you read, watched, or listened to."
            as="textarea"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={create}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
