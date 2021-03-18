import { makeStyles } from "@material-ui/core/styles";

export const usePaperStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: 20,
    flexGrow: 1,
    overflowX: "auto",
    overflowY: "auto",
    padding: 20,
    width: "50%",
  },
}));
