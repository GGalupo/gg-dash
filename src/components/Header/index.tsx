import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export const Header = () => {
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
      <Logo />

      {isWideScreen && <Search />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  );
};
