import { Button, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'5'} shadow={'base'} bgColor={'blackAlpha.900'} >
        <div>
        <Button variant={'unstyled'} color={'white'} mr={'5'} ml={'5'} >
            <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} mr={'5'} >
            <Link to='/exchanges'>Exchange</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} >
            <Link to='/coin'>Coins</Link>
        </Button>
        </div>
       
        <Spacer />
        <div ml="100">
          Xcrypto0
        </div>

    </HStack>
  )
}

export default Header