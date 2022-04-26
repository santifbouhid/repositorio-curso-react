import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import s from "./loading.module.css";

export default function Loading() {
  return (
    <div>
      <ChakraProvider>
        <Spinner className={s.spinner} size="xl" color="purple.500" />
      </ChakraProvider>
    </div>
  );
}
