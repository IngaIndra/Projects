import { Home } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BreadCrumbs } from "../components";
import { useToast } from "../hooks";

const breadCrumbs = [
  {
    label: "",
    link: "/",
    icon: <Home />,
  },
  {
    link: "/categories",
    label: "Categories",
  },
  {
    label: "New",
  },
];

export const NewCategoriesScreen = () => {
  const showToast = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate("");

  const submit = () => {
    axios.post("http://localhost:8000/categories", { name }).then((res) => {
      showToast();
    });
  };
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,.1)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Add categories
        </Typography>
        <Stack sx={{ height: 400, width: "100%", mt: 3, gap: "24px" }}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Category name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => {
              submit();
              navigate("/categories");
            }}
          >
            Save
          </Button>
          <Button variant="outlined">Reset</Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/categories");
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
