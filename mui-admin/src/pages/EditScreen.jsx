import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "../hooks";

export const EditScreen = () => {
  const showToast = useToast();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate("");

  const submit = (id) => {
    axios
      .put("http://localhost:8000/categories/:id", { name, slug })
      .then((res) => {
        showToast();
      });
  };

  return (
    <>
      <Stack sx={{ height: 100, width: "100%", mt: 3, gap: "24px" }}>
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
      <Stack sx={{ height: 100, width: "100%", mt: 3, gap: "24px" }}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Category slug"
          variant="outlined"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
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
    </>
  );
};
