import React, { useContext, useState } from "react";
import { useContentStyles } from "../Styles/ContentStyle";
import { AppContext } from "../AppContext";
import { usePaperStyles } from "../Styles/PaperStyle";

import clsx from "clsx";
import { TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const handleH1 = (contentP) => {
  //const regex = /(# ([^\n]+\n))+/;
  const regex = /# ([^\n]+\n)/;
  const res = contentP.match(regex);
  return res;
};

export default function Content() {
  const [text, setText] = useState("");
  const [open] = useContext(AppContext);
  const classes = useContentStyles();
  const paperStyle = usePaperStyles();
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div o className={classes.drawerHeader} />

      <TextField
        placeholder="Write Here"
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
        style={{ textAlign: "left", width: "50%" }}
        multiline
      />

      <Paper elevation={12} className={paperStyle.paper}>
        {text.includes("\n")
          ? text.split("\n").map((row) => {
              const result = handleH1(row + "\n");
              if (result) {
                return (
                  <Typography variant="h1" key={row}>
                    {result[1]}
                  </Typography>
                );
              } else {
                return (
                  <Typography component="p" key={row}>
                    {row}
                  </Typography>
                );
              }
            })
          : text}
      </Paper>
    </main>
  );
}
