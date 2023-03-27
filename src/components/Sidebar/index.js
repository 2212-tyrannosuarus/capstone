import React, { useState } from "react";
import { logout } from "../../store";
import { connect } from "react-redux";
import {
  Box,
  Flex,
  IconButton,
  Icon,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiBriefcase,
  FiDollarSign,
  FiHome,
  FiCreditCard,
  FiUser,
  FiLogOut,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const NavLink = ({ navSize, icon, title, href, onClick }) => (
  <Flex
    mt={2}
    p={1}
    flexDir="column"
    w="100%"
    alignItems={navSize === "small" ? "center" : "flex-start"}
  >
    <Link
      borderRadius={8}
      _hover={{ bg: "gray.100" }}
      w={navSize === "large" && "100%"}
      href={href}
      onClick={onClick}
    >
      <Flex>
        <Icon as={icon} fontSize="xl" color="gray.600" />
        <Text
          ml={5}
          display={navSize === "small" ? "none" : "flex"}
          color="gray.600"
        >
          {title}
        </Text>
      </Flex>
    </Link>
  </Flex>
);

const SideBar = ({ navSize, handleNavSize, handleLogout }) => {
  return (
    <Flex
      boxShadow="md"
      minH="100vh"
      flexDir="column"
      bg={"white"}
      position="fixed"
      top={0}
      left={0}
      justifyContent="space-between"
    >
      <Flex
        px="5"
        pt="8"
        pb="16"
        flexDir="column"
        minW={navSize == "small" ? "75px" : "250px"}
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Link href="/dashboard">
          <Box display="flex" alignItems="center" pb="7" navSize={navSize}>
            <img src="/assets/logo.png" alt="Logo" width="50" height="50" />

            {navSize === "large" && (
              <Box
                ml="3"
                fontWeight="bold"
                pt={1}
                fontSize={26}
                color="grey.800"
              >
                BANK
              </Box>
            )}
          </Box>
        </Link>

        <NavLink
          navSize={navSize}
          icon={FiHome}
          title="Home"
          href="/dashboard"
        />

        <NavLink
          navSize={navSize}
          icon={FiCreditCard}
          title="Transactions"
          href="/transactions"
        />
        <NavLink
          navSize={navSize}
          icon={FiDollarSign}
          title="Budget"
          href="/budget/:userId"
        />
        <NavLink
          navSize={navSize}
          icon={FiTarget}
          title="My Goals"
          href="/goals"
        />
        <NavLink
          navSize={navSize}
          icon={FiTrendingUp}
          title="Trends"
          href="/trends/:userId"
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider />
        <NavLink
          navSize={navSize}
          icon={FiUser}
          title="My Profile"
          href="/profile"
        />
        <NavLink
          navSize={navSize}
          icon={FiLogOut}
          title="Logout"
          onClick={handleLogout}
        />
        <IconButton
          background="none"
          _hover={{ background: "none" }}
          icon={navSize === "large" ? <FiChevronsLeft /> : <FiChevronsRight />}
          onClick={() => handleNavSize()}
        />
      </Flex>
    </Flex>
  );
};

const mapDispatch = (dispatch) => {
  return {
    handleLogout() {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatch)(SideBar);
