import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

export default function ButtonComponent({ color, icon, id }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <Fab
        className={color}
        aria-label="add"
        onClick={() => {
          return navigate(`/${id}`);
        }}
      >
        {icon}
      </Fab>
    </>
  );
}
