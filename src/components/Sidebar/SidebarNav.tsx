import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="CORE">
        <Stack spacing="4" mt={["2", "4", "6", "8"]} align="stretch">
          <NavLink icon={RiDashboardLine} href="/dashboard">
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine} href="/users">
            Users
          </NavLink>
        </Stack>
      </NavSection>

      <NavSection title="AUTOMATION">
        <Stack spacing="4" mt={["2", "4", "6", "8"]} align="stretch">
          <NavLink icon={RiInputMethodLine} href="/forms">
            Forms
          </NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">
            Automation
          </NavLink>
        </Stack>
      </NavSection>
    </Stack>
  );
};
