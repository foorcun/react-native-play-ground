# ThemeProvider import to the App.js

import { ThemeProvider } from "styled-components/native";

## basit bir sekilde theme tanimlanmasi

const theme = {
primary: "black",
};

### ya da import etmek

```.sh
import { theme } from './src/infrastructure/theme';
```

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

import { useTheme } from "styled-components/native";

## datalarin alinmasi

const theme = useTheme();

## ornek kullanim

console.log("bu Home dan " + theme.primary);

## ornek kullanim View component

      style={(styles.container, { flex: 1, backgroundColor: theme.primary })}

# !!!!! styled kullanimi

## import

// import styled from "styled-components"; // bunu import etme
import styled from "styled-components/native"; // bunu import et

## default style larin girilmesi

const defaultViewStyles = (theme) => `background-color: ${theme.primary};`;

## kendi componentimizi olusturmamiz

export const CustomView = styled(View)`  ${({ theme }) => defaultViewStyles(theme)};`;

## kullanimi

### import

import { CustomView } from "../components/CustomView";

###

    <CustomView></CustomView>
