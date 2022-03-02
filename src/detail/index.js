import React, { useEffect, useState } from "react";
import NavbarComponent from "../component/NavbarComponent";
import ButtonComponent from "../component/ButtonComponent";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`https://boisu-api.mfaiztriputra.id/api/words/${id}`)
        .then((res) => {
          setData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [id]);

  return (
    <div style={{ height: "100%" }}>
      <div className="container position-relative px-2">
        <NavbarComponent />
        <div className=""></div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="position-absolute bottom-0 right-0 text-right mb-5">
          <ButtonComponent
            icon={<CheckIcon />}
            color="bg-success text-white"
            id="1"
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50%" }}
      >
        <p style={{ fontSize: "30px", fontSize: "10vw" }}>{data.text}</p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="position-absolute bottom-0 right-0 text-right mb-5">
          <ButtonComponent
            icon={<ClearIcon />}
            color="bg-danger text-white"
            id="2"
          />
        </div>
      </div>
    </div>
  );
}
