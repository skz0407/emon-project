import { Inter } from "next/font/google";
import { Button } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function hello() {
  return (
    <>
    <Button>Button</Button>
    </>
  );
}