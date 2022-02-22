import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListComponent() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`https://boisu-api.mfaiztriputra.id/api/words`)
        .then((res) => {
          setData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <ListGroup variant="flush">
      {data.map((data) => {
        return (
          <ListGroup.Item
            action
            onClick={() => {
              return navigate(`/${data.id}`);
            }}
            key={data.id}
          >
            {data.text}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
