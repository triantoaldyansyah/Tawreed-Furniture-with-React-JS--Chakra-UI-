import React from "react";
import logo from './icon-logo.png';
import {
  Box,
  Stack,
  Flex,
  Button,
  useDisclosure,
  Spacer
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton } from '@chakra-ui/menu';
import './Header.css';

//Header

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={6}
      mr='96px'
      bg="white"
      {...props}
    >
      <Flex align="center" ml="96px" mr="131px">
          <img src={logo} className="App-logo" alt="logo" />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack      
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
        spacing={0}
      >
        <Menu>
          <MenuButton className="MenuButton" href="#">Work</MenuButton>
          <MenuButton className="MenuButton" href="#">Product</MenuButton>
          <MenuButton className="MenuButton" href="#">Article</MenuButton>
          <MenuButton className="MenuButton" href="#">How It Work</MenuButton>
          <MenuButton className="MenuButton" href="#">Contact Us</MenuButton>
        </Menu>
      </Stack>
      <Spacer />

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          className="Button"
          background="white"
          mr="4"
          _hover={{ bg: "white.700" }}
        >
          Login
        </Button>
        <Button
          className="Button"
          borderRadius="none"
          background="#1D6861"
          color="white"
          _hover={{ bg: "#18524c" }}
        >
          Register
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;