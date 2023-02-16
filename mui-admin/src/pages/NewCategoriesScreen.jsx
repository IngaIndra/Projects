import { Home } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack, width } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BreadCrumbs } from "../components";
import { useDialog } from "../hooks/useDialog";

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
  const showDialog = useDialog();
  const [newCategories, setNewCategories] = useState([]);
  const navigate = useNavigate("");

  useEffect(() => {
    axios.get("http://localhost:8000/categories/new").then((res) => {
      setNewCategories(res.data);
    });
  }, []);

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
            onChange={() => {}}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              showDialog();
              //   navigate("/categories");
            }}
          >
            Save
          </Button>
          <Button variant="outlined">Reset</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Stack>
    </>
  );
};
