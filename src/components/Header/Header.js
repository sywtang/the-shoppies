import { Box, Flex, Heading } from "@chakra-ui/react";
import ToggleColor from "../ToggleColor/ToggleColor";

const Header = () => {
  return (
    <Box width="100%">
      <header className="app-header">
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Heading as="h1" className="main-heading">
            The Shoppies
          </Heading>
          <ToggleColor />
        </Flex>
      </header>
    </Box>
  );
};

export default Header;
