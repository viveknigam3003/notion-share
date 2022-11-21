import { Avatar, AvatarProps } from "@mantine/core";
import React from "react";

interface UserAvatarProps extends AvatarProps {
  /**
   * Boolean to indicate if the data passed is for a user or a group
   */
  isGroup?: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ isGroup, src, alt, size, ...rest }) => {
  const userAvatarProps: AvatarProps = !isGroup
    ? {
        radius: "xl",
      }
    : {};

  return src ? (
    <Avatar {...rest} size={size} src={src} color="violet" {...userAvatarProps} >
      {alt?.charAt(0).toUpperCase()}
    </Avatar>
  ) : (
    <Avatar {...rest} size={size} src={src} color="violet" {...userAvatarProps} />
  );
};

export default UserAvatar;
