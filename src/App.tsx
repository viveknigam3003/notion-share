import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Box, createStyles } from "@mantine/core";
import "./App.css";
import ShareButton from "./modules/ShareButton";

function App() {
  const { classes } = useStyles();

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
