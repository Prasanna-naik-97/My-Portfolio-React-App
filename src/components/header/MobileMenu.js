import React from 'react'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, InfoIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";

const MobileMenu = () => {
  return (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
            display={{base: 'block', xl: 'none'}}
        />
        <MenuList>
            <MenuItem icon={<InfoIcon />}>
            About
            </MenuItem>
            <MenuItem icon={<PhoneIcon />}>
            Contact
            </MenuItem>
            <MenuItem icon={<ViewIcon />}>
            View Work
            </MenuItem>
        </MenuList>
    </Menu>
  )
}

export default MobileMenu
