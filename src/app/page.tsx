"use client";
import Home from "@/pages/home/home.page";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider>
  );
}
