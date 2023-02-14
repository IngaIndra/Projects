import { useContext } from "react";
import { DialogContext } from "../contexts";

export const useDialog = () => {
  const { setOpen } = useContext(DialogContext);
  const showDialog = () => {
    setOpen(true);
  };
  return showDialog;
};
