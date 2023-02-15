import { Home } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { BreadCrumbs } from "../components";
import { Button, Typography } from "@mui/material";

export const CategoriesScreen = () => {
  const breadCrumbs = [
    {
      label: "",
      to: "/",
      icon: <Home />,
    },
    {
      label: "Categories",
    },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Typography></Typography>
      <Stack>
        <Button variant="contained">add</Button>
        <Button variant="contained">filter</Button>
      </Stack>
    </>
  );
};
