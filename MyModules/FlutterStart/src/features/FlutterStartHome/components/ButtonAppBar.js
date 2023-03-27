import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import styled from "styled-components/native"; // bunu import et
import { useTheme } from "styled-components/native";

const ButtonAppBar = () => {
  const theme = useTheme();

  return (
    <AppBar
      title="Title"
      color={theme.primary}
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
};

export default ButtonAppBar;
// export default ButtonAppBar = styled(ButtonAppBar)`
// color= ${(props) => props.theme.colors.brand.primary},
// `;
