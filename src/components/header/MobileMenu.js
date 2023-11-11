import React from 'react'
import { IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, InfoIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import homeIcon from "../../assets/images/techIcons/home-icon.svg";
import { Link } from 'react-scroll';

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
            <Link to="home-intro" offset={-100} smooth={true} duration={500}>
              <MenuItem>
                <Image src={homeIcon} paddingRight={'2'} marginLeft={'-2px'}/>
                  Home
              </MenuItem>
            </Link>
            <Link to="about-me" offset={-100} smooth={true} duration={500}>
              <MenuItem icon={<InfoIcon />}>
              About
              </MenuItem>
            </Link>
            <Link to="experience" offset={-100} smooth={true} duration={500}>
              <MenuItem icon={<ViewIcon />}>
              Experience
              </MenuItem>
            </Link>
            <Link to="contactus-form" smooth={true} duration={500} offset={-100}>
              <MenuItem icon={<PhoneIcon />}>
              Contact
              </MenuItem>
            </Link>
        </MenuList>
    </Menu>
  )
}

export default MobileMenu
