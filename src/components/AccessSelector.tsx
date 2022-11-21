import { createStyles, Select, SelectProps } from "@mantine/core";
import { HiChevronDown } from "react-icons/hi";
import { PERMISSION_LEVEL } from "../types";

const AccessSelector: React.FC<Omit<SelectProps, "data">> = ({ ...props }) => {
  const { classes } = useStyles();
  return (
    <Select
      {...props}
      tabIndex={0}
      variant="unstyled"
      value={props.value}
      onChange={props.onChange}
      data={[
        { value: PERMISSION_LEVEL.FULL, label: "Full Access" },
        { value: PERMISSION_LEVEL.EDIT, label: "Can Edit" },
        { value: PERMISSION_LEVEL.VIEW, label: "Can View" },
        { value: PERMISSION_LEVEL.NO_ACCESS, label: "No Access" },
      ]}
      size="xs"
      rightSection={<HiChevronDown color="gray" />}
      transition="pop-top-left"
      transitionDuration={100}
      transitionTimingFunction="ease"
      classNames={{
        input: classes.input,
        itemsWrapper: classes.itemsWrapper,
      }}
      styles={{
        dropdown: {
          width: "11rem !important",
          left: "20rem !important",
        },
      }}
    />
  );
};

export default AccessSelector;

const useStyles = createStyles((theme) => ({
  itemsWrapper: {
    '& [data-selected="true"]': {
      backgroundColor: `${theme.colors.gray[3]} !important`,
      color: `${theme.colors.dark[8]} !important`,
    },
    '& [data-hovered="true"][data-selected="false"]': {
      backgroundColor: `${theme.colors.gray[1]} !important`,
      color: `${theme.colors.dark[8]}`,
    },

    "& :last-child": {
      color: theme.colors.red[6],
      '[data-selected="true"]': {
        color: `${theme.colors.red[6]}`,
      },
      '[data-hovered="true"]': {
        color: `${theme.colors.red[6]}`,
      },
    },
  },
  input: {
    width: "6.25rem",
    color: theme.colors.gray[6],
    "&:focus:not(.focus-visible)": {
      outline: "none",
    },
    "&:focus-visible": {
      borderRadius: theme.radius.sm,
      outline: `2px solid ${theme.colors.violet[5]}`,
    },
  },
}));
