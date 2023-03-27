import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { colors } from "../../../infrastructure/theme/colors";

const ButtonAppBar = () => (
  <AppBar
    title="Title"
    color={colors.brand.primary}
    leading={(props) => (
      <IconButton
        icon={(props) => <Icon name="menu" {...props} />}
        {...props}
      />
    )}
    trailing={(props) => (
      <HStack>
        <IconButton
          icon={(props) => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={(props) => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);

export default ButtonAppBar;
// export default ButtonAppBar = styled(ButtonAppBar)`
// color= ${(props) => props.theme.colors.brand.primary},
// `;
