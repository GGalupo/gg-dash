import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Galupo</Text>
        <Text color="gray.300" fontSize="small">
          ggalupo2@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gustavo Galupo" />
    </Flex>
  );
};
