import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Layout } from "./components/Layout";
import { useToast } from "./hooks";
import { useDialog } from "./hooks/useDialog";

function App() {
  // const showToast = useToast();
  const showDialog = useDialog();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            showDialog();
          }}
        >
          Toggle toast
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
