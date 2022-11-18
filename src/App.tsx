import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { Box, Button, createStyles, Divider, Popover } from "@mantine/core";
import { HiShare } from "react-icons/hi";
import "./App.css";
import FooterStrip from "./modules/FooterStrip";
import InvitedUserList from "./modules/InvitedUserList";
import InviteUserSearch from "./modules/InviteUserSearch";
import ShareToWeb from "./modules/ShareToWeb";

function App() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Popover
        width={512}
        trapFocus
        position="bottom-start"
        shadow="md"
        transition={"pop-top-right"}
      >
        <Popover.Target>
          <Button color="dark" rightIcon={<HiShare />}>
            Share
          </Button>
        </Popover.Target>
        <Popover.Dropdown className={classes.dropdown}>
          <ShareToWeb />
          <Divider />
          <InviteUserSearch />
          <InvitedUserList />
          <Divider/>
          <FooterStrip />
        </Popover.Dropdown>
      </Popover>
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
  dropdown: {
    borderRadius: "0.5rem",
    padding: 0,
  },
}));
