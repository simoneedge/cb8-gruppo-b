"use client";

import { useSearchParams } from "next/navigation";

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Notification,
  Space,
} from "@mantine/core";

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const [signInFailed, setSignInFailed] = useState(false);
  const [type, toggle] = useToggle(["signIn", "signUp"]);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [signUpCompleted, setSignUpCompleted] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      name: (val) =>
        val.length < 2 ? "Name must have at least 2 letters" : null,
      password: (val) => (val.length >= 4 ? null : "Invalid password"),
    },
  });

  const handleSignIn = async () => {
    const username = form.values.name;
    const password = form.values.password;

    await signIn("credentials", {
      username,
      password,
      callbackUrl: callbackUrl || "/",
      redirect: true,
    });
    console.log("Sign Up");
  };

  const handleSignUp = async () => {
    const userData = {
      username: form.values.name,
      email: form.values.email,
      password: form.values.password,
    };
    fetch("/api/user", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          toggle();
          setSignUpCompleted(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const signInError = searchParams.get("error");

    if (signInError) {
      setSignInFailed(true);
    }
  }, [searchParams]);

  return (
    <Paper radius={"md"} p={"xl"} withBorder>
      {signInFailed && (
        <>
          <Notification
            onClick={() => setSignInFailed(false)}
            title="Sign In Failed"
            color="red"
          >
            Invalid username and/or password
          </Notification>
          <Space h="md" />
        </>
      )}
      {signUpCompleted && (
        <>
          <Notification
            onClick={() => setSignUpCompleted(false)}
            title="Sign Up Completed!"
            color="green"
          >
            You can now sign in
          </Notification>
          <Space h="md" />
        </>
      )}

      <form>
        <Stack>
          {/* {type === "signUp" && (
            <TextInput
              label={"Name"}
              placeholder={"Your name"}
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius={"md"}
            />
          )} */}

          <TextInput
            required
            label={"Username"}
            placeholder={"username"}
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name}
            radius={"md"}
          />

          <Divider />

          <div>
            <PasswordInput
              required
              label={"Password"}
              placeholder={"Your password"}
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
              radius={"md"}
            />
          </div>

          {type === "signUp" && (
            <Checkbox
              label={"I accept terms and conditions"}
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify={"space-between"} mt={"xl"}>
          <Anchor
            component={"button"}
            type={"button"}
            c={"dimmed"}
            onClick={() => toggle()}
            size={"xs"}
          >
            {type === "signUp"
              ? "Click here for Sign In"
              : "Click here for Sign Up"}
          </Anchor>
          {type === "signIn" ? (
            <Button
              // type={'submit'}
              color="purple"
              onClick={() => {
                handleSignIn();
              }}
            >
              {upperFirst(type)}
            </Button>
          ) : (
            <Button
              // type={'submit'}
              color="purple"
              onClick={() => {
                handleSignUp();
              }}
            >
              {upperFirst(type)}
            </Button>
          )}
        </Group>
      </form>
    </Paper>
  );
};

export default SignInForm;
