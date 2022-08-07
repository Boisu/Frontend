import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

export default function ListComponent({ search }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`https://message.mfaiztriputra.id/api/messages`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, );

  // console.log(data)
  return (
    <ListGroup variant="flush">
      {data.map((data) => {
        if (search === "") {
          if(data.isSenderAnonymous === 0) {
            return (
              <ListGroup.Item key={data.id}>
                To : <b>{data.receiver}</b><br></br>
                From : <b>{data.sender}</b><br></br>
                Message : {data.message} <br></br>
              </ListGroup.Item>
            );
          } else {
            return (
              <ListGroup.Item key={data.id}>
                To : <b>{data.receiver}</b><br></br>
                From : <i>Someone</i><br></br>
                Message : {data.message} <br></br>
              </ListGroup.Item>
            );
          }
        } else {
          if (!data.sender) {
            data.sender = ""
          }
          if (
            (data.message.toLowerCase()).includes(search.toLowerCase()) || 
            (data.receiver.toLowerCase()).includes(search.toLowerCase()) ||
            (data.sender.toLowerCase()).includes(search.toLowerCase())
          )
          {
            if(data.isSenderAnonymous === 0) {
              return (
                <ListGroup.Item key={data.id}>
                  To : <b>{data.receiver}</b><br></br>
                  From : <b>{data.sender}</b><br></br>
                  Message : {data.message} <br></br>
                </ListGroup.Item>
              );
            } else {
              return (
                <ListGroup.Item key={data.id}>
                  To : <b>{data.receiver}</b><br></br>
                  From : <i>Someone</i><br></br>
                  Message : {data.message} <br></br>
                </ListGroup.Item>
              );
            }
          }
        }
      })}
    </ListGroup>
  );
}
