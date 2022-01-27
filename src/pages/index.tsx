import { useRouter } from "next/router";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";
import { signInSchema } from "../schemas";

type SignInData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInData> = async (_values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/dashboard");
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
