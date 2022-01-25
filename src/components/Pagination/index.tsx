import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export const Pagination = () => {
  return (
    <Flex mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>1</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>

      <HStack>
        <PaginationItem pageNumber={1} isCurrentPage />
        <PaginationItem pageNumber={2} isCurrentPage />
        <PaginationItem pageNumber={3} isCurrentPage />
        <PaginationItem pageNumber={4} isCurrentPage />
        <PaginationItem pageNumber={5} isCurrentPage />
      </HStack>
    </Flex>
  );
};
