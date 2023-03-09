import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { useDialog } from "./hooks/useDialog";
import { CategoriesScreen, HomeScreen } from "./pages";
import { NewCategoriesScreen } from "./pages/NewCategoriesScreen";
import { EditCategoriesScreen } from "./pages/EditCategoriesScreen";

const bgColor = blueGrey[50];

const wrapperStyle = {
  p: 5,
  bgcolor: bgColor,
  width: "calc(100vw - 65px)",
  minHeight: "calc(100vh - 65px)",
  boxSizing: "border-box",
};

function App() {
  const showDialog = useDialog();
  return (
    <Layout>
      <Stack sx={wrapperStyle}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
          <Route path="/categories/new" element={<NewCategoriesScreen />} />
          <Route
            path="/categories/edit/:id"
            element={<EditCategoriesScreen />}
          />
        </Routes>
      </Stack>
    </Layout>
  );
}

export default App;

{
  /* <Button
          variant="contained"
          onClick={() => {
            showDialog();
          }}
        >
          Toggle toast
        </Button> */
}
