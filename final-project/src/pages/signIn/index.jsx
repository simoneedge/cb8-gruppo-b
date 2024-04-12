import { Center, Flex, Button, Space } from "@mantine/core";

import React from "react";
import SignInForm from "../../components/signInForm/SignInForm";

import Link from "next/link";
const SignIn = () => {
  return (
    <Center h={"100vh"} w={"100vw"}>
      <Flex direction={"column"} align={"center"} justify={"center"}>
        <SignInForm />
        <Space h={20} />
        <Link href={"/"}>
          <Button color={"#ffcf56"} c={"black"}>
            HOME
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};
export default SignIn;
