# Theming

Página de referencia de ChakraUI -> [https://chakra-ui.com/docs/styled-system/customize-theme](https://chakra-ui.com/docs/styled-system/customize-theme)


# [Chakra UI Theme](https://github.com/deii-ulpgc-tecnologia/deii-frontend/tree/dev/src/theme#chakra-ui-theme) (Podemos usar esta pagina para cambiar el tema)

This is a Chakra UI theme generated with [Hypertheme Editor](https://hyperthe.me/).

## [Usage](https://github.com/deii-ulpgc-tecnologia/deii-frontend/tree/dev/src/theme#usage)

Put the entire directory inside the `src/` folder of your project.

Use it in inside your ChakraProvider

```tsx
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      ...rest of code
    </ChakraProvider>
  )
}

export default App
```
