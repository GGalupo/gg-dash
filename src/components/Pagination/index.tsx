import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

import { generatePagesArray } from "./generatePagesArray";

interface PaginationProps {
  recordsCount: number;
  onPageChange: (page: number) => void;
  recordsPerPage?: number;
  currentPage?: number;
}

const siblingsCount = 1;

export const Pagination = ({
  recordsCount,
  onPageChange,
  recordsPerPage = 10,
  currentPage = 1,
}: PaginationProps) => {
  const lastPage = Math.ceil(recordsCount / recordsPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Flex
      direction={["column", "row"]}
      mt={["3", "8"]}
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>

      <HStack mt={["3", "0"]}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem key={page} pageNumber={page} />
          ))}
        <PaginationItem pageNumber={currentPage} isCurrentPage />
        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem key={page} pageNumber={page} />
          ))}

        {currentPage < lastPage - siblingsCount && (
          <>
            {currentPage < lastPage - siblingsCount - 1 && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem pageNumber={lastPage} />
          </>
        )}
      </HStack>
    </Flex>
  );
};
