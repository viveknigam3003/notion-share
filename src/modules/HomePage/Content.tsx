import { Box, createStyles, Text, Title } from "@mantine/core";
import { CgArrowTopRight } from "react-icons/cg";

const Content = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.contentWrapper}>
      <Box className={classes.content}>
        <Title className={classes.title}>Notion Share Button</Title>
        <Text className={classes.p}>
          Notion Share Button is a simple react based UI component that helps
          you add Notion like share button to your website, blog or any other
          web application.
        </Text>
        <Text className={classes.p}>
          Click on the "Share" button on the top right{" "}
          <CgArrowTopRight className={classes.icon} /> to start using the
          component.
        </Text>
        <Text className={classes.p}>
          <strong>Component Features</strong>
          <ul>
            <li>TypeScript Support</li>
            <li>Customizable with props</li>
            <li>Implememented with native React state management principles</li>
            <li>
              Unopiniated way of handling operations like searching, selecting,
              and sharing access
            </li>
            <li>
              Adding, removing and updating users for 3 access levels - View,
              Edit, and Full Access
            </li>
            <li>
              Uses local storage for now, can be easily hooked up DB using APIs
            </li>
          </ul>
        </Text>
        <Text className={classes.p}>
          To understand more on how the component works, how to use the
          component, or customize with props check out{" "}
          <a href="https://github.com/viveknigam3003/notion-share">Readme</a> on
          Github.
        </Text>
      </Box>
      <Text className={classes.footer}>
        Built by{" "}
        <a href="https://www.linkedin.com/in/viveknigam3003">Vivek Nigam</a> for{" "}
        <a href="https://www.oslash.com/">OSlash</a>
      </Text>
    </Box>
  );
};

export default Content;

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
  },
  content: {
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      width: "50%",
    },
    padding: "3rem 0",
  },
  title: {
    fontSize: "2rem",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "3.5rem",
    },
  },
  p: {
    fontSize: "1.5rem",
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "1.25rem",
    },
    padding: "1rem 0",
    color: theme.colors.gray[7],
    lineHeight: 1.75,
    ul: {
      fontSize: "1rem",
      li: {
        marginBottom: "0.5rem",
      },
    },
  },
  icon: {
    marginLeft: "0.25rem",
    padding: 0,
  },
  footer: {
    width: "50%",
    textAlign: "left",
    fontSize: "1rem",
    padding: "1rem 0",
    color: theme.colors.gray[7],
  },
}));
