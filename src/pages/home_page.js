
import React, { useState } from 'react';
import welcome from "../assets/welcome.png";
import toast from "react-hot-toast";
 import { IoMdExit } from "react-icons/io";
 import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useDisclosure,
  Image,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = "dark";
  const dark = "#18222e";
  const light = "#ffffff";
  const dark_font = "#ffffff";
  const light_font = "#18222e";
  const navTo = useNavigate();

  return (
    <>
      <Box as="header" backgroundColor="blue.200" color="white" py={4} px={8}>
        DashBoard
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Sidebar"
          onClick={onOpen}
          ml={2}
          size="md"
          variant="outline"
        />
      </Box>
      <Drawer placement="left" backgroundColor='black' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader backgroundColor="black" color="white">Navbar</DrawerHeader>
            <DrawerBody>
              <Button variant="ghost">About</Button><br/>
              <Button variant="ghost">Our Service</Button><br/>
              <Button variant="ghost">Our Project</Button> <br/>
              <Button variant="ghost">Our Client</Button> <br/>
              <Button variant="ghost">Contact us</Button> 
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box as="main" p={8}
      bg={theme === "dark" ? dark : "white"}
      color={!(theme === "dark") ? dark : light}
      minH={"100vh"}
      flexDir={"column"}
    >
      <Image
        p={"10% 20%"}
        h={{ base: "60vh", lg: "90vh" }}
        w={"90%"}
        src={welcome}
      />
      <Flex w={"100%"} justifyContent={"center"}>
              <Button
          colorScheme="red"
          color={"white"}
          w={"20%"}
          onClick={() => {
            navTo("/");
            toast("Logged Out", {
              icon: (
                <Box color={"orange"}>
                  <IoMdExit />
                </Box>
              ),
              style: {
                borderRadius: "10px",
                background: theme === "dark" ? dark : light,
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                color: !(theme === "dark") ? dark : light,
              },
            });
          }}
        >
          LogOut
        </Button>
      </Flex>{" "}
      </Box>
      
    </>
  );
};

export default Sidebar;
