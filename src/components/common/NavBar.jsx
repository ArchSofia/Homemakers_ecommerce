import React from "react";
import { Container, Flex, Spacer, Box, Heading, Button, Center } from "@chakra-ui/react";
import CartWidget from "./CartWidget"
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
  } from '@chakra-ui/react'
  import { Link, NavLink } from "react-router-dom";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const NavBar = () => {
	return (
		<>
			<Container maxW="100rem" bg="white.900" color="#262626" padding={"0.5rem"}>
				<Flex alignContent="center" gap="2">
					<Box p="2" color="white">
						<Heading size="md" color='black'> <Link to={"/home"}>HomeMakers</Link></Heading>
					</Box>
					
					<Spacer/>

					<Box>
						<Center>
					<Tabs>
  <TabList>
    <Tab><Link to={"/catalogue"}> Ver todo</Link></Tab>
    <Tab><Link to={"/category/:id"}>Almohadones</Link></Tab>
    <Tab><Link to={"/category/:id"}>Mantas</Link></Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Puedes ver todos los productos aqui</p>
    </TabPanel>
    <TabPanel>
      <p>Almohadones</p>
    </TabPanel>
    <TabPanel>
      <p>Mantas</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</Center>
					</Box>
					
					<Spacer />
					<Box p="2" color="black">
						<CartWidget />
					</Box>
				</Flex>
			</Container>
		</>
	);
};

export default NavBar;