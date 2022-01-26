import { ElementType } from "react";
import Link from "next/link";
import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};
