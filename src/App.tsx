import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Box, createStyles } from "@mantine/core";
import { useEffect } from "react";
import "./App.css";
import { config } from "./db/config";
import { initDB } from "./db/init";
import { PageDB } from "./db/PageData";
import { UserDB } from "./db/UserData";
import ShareButton from "./modules/ShareButton";

function App() {
  const { classes } = useStyles();

  useEffect(() => {
    initDB(config.pageDB, PageDB);
    initDB(config.userDB, UserDB);
  }, []);

  return (
    <Box className={classes.root}>
      <ShareButton />
    </Box>
  );
}

export default App;

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));
