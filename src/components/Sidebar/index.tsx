import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="CORE">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiContactsLine}>Users</NavLink>
          </Stack>
        </NavSection>

        <NavSection title="AUTOMATION">
          <Stack spacing="4" mt="8" align="stretch">
            <NavLink icon={RiInputMethodLine}>Forms</NavLink>
            <NavLink icon={RiGitMergeLine}>Automation</NavLink>
          </Stack>
        </NavSection>
      </Stack>
    </Box>
  );
};

export default Sidebar;
