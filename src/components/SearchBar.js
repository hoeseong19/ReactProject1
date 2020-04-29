import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function SearchBar() {
  return (
    <Form inline className="mt-3">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="button">Submit</Button>
    </Form>
  );
}