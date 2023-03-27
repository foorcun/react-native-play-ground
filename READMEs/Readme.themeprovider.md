# ThemeProvider import to the App.js

import { ThemeProvider } from "styled-components/native";

## basit bir sekilde theme tanimlanmasi

```.sh

const theme = {
primary: "black",
};
```

ya da

```.sh
const theme = {
  colors: {
    ui: {
      primary: "dodgerblue",
    },
  },
};
```

### ya da import etmek

````.sh
import { theme } from './src/infrastructure/theme';

ya da
```.sh
import { theme } from "./MyModules/FlutterStart/src/infrastructure/theme";
````

## return de kullanilmasi

```.sh
export default function App() {
console.log(theme.primary);
return (
<>
<ThemeProvider theme={theme}>
<ThemeProviderModule></ThemeProviderModule> // bu sadece benim yaptigimi bir component, karismasin die adina Module ekleidim
</ThemeProvider>
</>
);
}
```

# yerinde kullanimi

## import etmek

```.sh
import { useTheme } from "styled-components/native";
```

## datalarin alinmasi

```.sh

const theme = useTheme();
```

## ornek kullanim

```.sh

console.log("bu Home dan " + theme.primary);
```

## ornek kullanim View component

```.sh

      style={(styles.container, { flex: 1, backgroundColor: theme.primary })}
```

## ornek kullanim AppBar component

```.sh
 <AppBar
      title="Title"
      color={theme.primary}
```

# !!!!! styled kullanimi

## import

```.sh
// import styled from "styled-components"; // bunu import etme
import styled from "styled-components/native"; // bunu import et
```

## default style larin girilmesi

```.sh
const defaultViewStyles = (theme) => `
background-color: ${theme.primary};
`;
```

## kendi componentimizi olusturmamiz

```.sh
export const CustomView = styled(View)`
  ${({ theme }) => defaultViewStyles(theme)};
`;
```

## kullanimi

### import

import { CustomView } from "../components/CustomView";

###

    <CustomView></CustomView>
