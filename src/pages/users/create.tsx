import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { RiSaveFill, RiSaveLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const CreateUser = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="confirm-password"
                type="password"
                label="Confirm password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" gap="4" justify="flex-end">
            <HStack>
              <Button colorScheme="whiteAlpha" variant="ghost">
                Cancel
              </Button>
              <Button leftIcon={<Icon as={RiSaveLine} />} colorScheme="pink">
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
