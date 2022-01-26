import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useDrawer } from "../../contexts/DrawerContext";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export const Header = () => {
  const { onOpen } = useDrawer();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      width="100%"
      as="header"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open mobile navbar"
          fontSize={["20", "24"]}
          onClick={onOpen}
          variant="unstyled"
          mr={["2", "3"]}
          mt={["2", "3"]}
          icon={<Icon as={RiMenuLine} />}
        />
      )}
      <Logo />

      {isWideScreen && <Search />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
};
