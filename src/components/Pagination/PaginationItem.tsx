import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  onPageChange: (page: number) => void;
  isCurrentPage?: boolean;
}

export const PaginationItem = ({
  pageNumber,
  isCurrentPage = false,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
};
