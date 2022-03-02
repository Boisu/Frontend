import React, { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import ListComponent from "./ListComponent";

export default function FindComponent() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    // console.log(search);
  }, [search]);

  return (
    <>
      <Form className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="search word here..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <ListComponent search={search} />
    </>
  );
}
