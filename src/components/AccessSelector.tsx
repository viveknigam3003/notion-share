import { createStyles, Select, SelectProps } from "@mantine/core";
import { HiChevronDown } from "react-icons/hi";

const AccessSelector: React.FC<Omit<SelectProps, "data">> = ({ ...props }) => {
  const { classes } = useStyles();
  return (
    <Select
      {...props}
      tabIndex={0}
      variant="unstyled"
      defaultValue={"no-access"}
      data={[
        { value: "full", label: "Full Access" },
        { value: "edit", label: "Can Edit" },
        { value: "view", label: "Can View" },
        { value: "no-access", label: "No Access" },
      ]}
      size="xs"
      rightSection={<HiChevronDown color="gray" />}
      className={classes.root}
      transition="pop-top-left"
      transitionDuration={100}
      transitionTimingFunction="ease"
      classNames={{
        root: classes.root,
        input: classes.input,
      }}
      styles={(theme) => ({
        dropdown: {
          width: '10rem',
        }
      })}
    />
  );
};

export default AccessSelector;

const useStyles = createStyles((theme) => ({
  root: {   
    ".mantine-Select-itemsWrapper": {
      '[data-selected="true"]': {
        backgroundColor: theme.colors.gray[1],
        color: theme.colors.dark[8],
      },
      '[aria-selected="true"]': {
        backgroundColor: theme.colors.gray[2],
        color: theme.colors.dark[8],
      },
      "& :last-child": {
        color: theme.colors.red[6],
        '[data-selected="true"]': {
          color: theme.colors.red[6],
        },
      },
    },
  },
  input: {
    width: '6.25rem',
    color: theme.colors.gray[6],
  },
}));
