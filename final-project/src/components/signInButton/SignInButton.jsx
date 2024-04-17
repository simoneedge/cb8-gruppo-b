import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mantine/core";

const SignInButton = () => {
  const { data: session } = useSession();
  return (
    <Button
      color="purple"
      onClick={() => {
        session ? signOut() : signIn();
      }}
    >
      {session ? "SIGN OUT" : "SIGN IN"}
    </Button>
  );
};
console.log(3234);
console.log(2332);
if (Button) {
  console.log(434);
}

export default SignInButton;
