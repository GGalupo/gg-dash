import { Dispatch, SetStateAction } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

import { generatePagesArray } from "./generatePagesArray";

interface PaginationProps {
  recordsCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  recordsPerPage?: number;
}

const siblingsCount = 1;

export const Pagination = ({
  recordsCount,
  currentPage,
  setCurrentPage,
  recordsPerPage = 10,
}: PaginationProps) => {
  const lastPage = Math.ceil(recordsCount / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
            <PaginationItem pageNumber={1} onPageChange={handlePageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              key={page}
              pageNumber={page}
              onPageChange={handlePageChange}
            />
          ))}
        <PaginationItem
          pageNumber={currentPage}
          isCurrentPage
          onPageChange={handlePageChange}
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              key={page}
              pageNumber={page}
              onPageChange={handlePageChange}
            />
          ))}

        {currentPage < lastPage - siblingsCount && (
          <>
            {currentPage < lastPage - siblingsCount - 1 && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem
              pageNumber={lastPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </HStack>
    </Flex>
  );
};
