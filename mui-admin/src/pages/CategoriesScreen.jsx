import { Delete, Edit, Home } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import { Stack } from "@mui/system";
import { BreadCrumbs } from "../components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "../hooks";

const breadCrumbs = [
  {
    label: "",
    link: "/",
    icon: <Home />,
  },
  {
    label: "Categories",
  },
];

export const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const showToast = useToast();

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const deleteItem = (id) => {
    axios
      .delete("http://localhost:8000/categories/" + id)
      .then((res) => {
        showToast("Amjilttai ustgalaa");
        setCategories(categories.filter((cat) => cat.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 50,
      renderCell: (params) => params.api.getRowIndex(params.row.id) + 1,
    },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "",
      headerName: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      renderCell: (params) => (
        <Stack sx={{ flexDirection: "row" }}>
          <Tooltip title="Edit">
            <Link component={RouterLink} to="/edit">
              <IconButton aria-label="edit" color="primary">
                <Edit fontSize="inherit" />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => {
                deleteItem(params.row.id);
              }}
            >
              <Delete fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

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
          Categories
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link component={RouterLink} to="/new" underline="none">
            <Button variant="contained">New</Button>
          </Link>
          <Button variant="contained">Filter</Button>
        </Stack>
        <Box sx={{ height: 400, width: "100%", mt: 3 }}>
          <DataGrid
            rows={categories}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(size) => setPageSize(size)}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Box>
      </Stack>
    </>
  );
};
