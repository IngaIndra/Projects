import { Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useToast } from "../../hooks";
import React from "react";

export const UserEdit = (id) => {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateItem = (id) => {
    axios
      .put("http://localhost:8000/users/" + id, [
        firstName,
        lastName,
        birthDate,
        email,
        phone,
        password,
        imageUrl,
      ])
      .then((res) => {
        showToast("Amjilttai zasagdlaa");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showToast = useToast();
  return (
    <>
      <Tooltip title="Edit">
        <IconButton aria-label="edit" color="primary" onClick={handleClickOpen}>
          <Edit fontSize="inherit" />
        </IconButton>
      </Tooltip>

      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={firstName}
              label="Firstname"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Lastname"
              value={lastName}
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={birthDate}
              label="Birthdate"
              type="number"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={email}
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={phone}
              label="Phone Number"
              type="number"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={password}
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={imageUrl}
              label="ImageUrl"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
