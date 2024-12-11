import { Box, InputBase, styled } from '@mui/material';
import logo from '../../assets/logo/logo.webp';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const CustomInput = styled(InputBase)(() => ({
  fontSize: '1.2rem',
}));

export function Nav() {
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
  const [searchBarHovered, setSearchBarHovered] = useState<boolean>(false);

  function handleSearchBarHover(value: boolean) {
    setSearchBarHovered(value);
  }

  function handleActiveState(value: boolean) {
    setSearchBarActive(value);
  }

  const isSearchBarActive = searchBarActive || searchBarHovered ? true : false;

  return (
    <Box
      sx={{
        height: '6rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin: '15px 40px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="web logo"
          style={{ width: '5rem', height: 'auto', objectFit: 'cover' }}
        />
      </Box>

      <Box
        onMouseEnter={() => handleSearchBarHover(true)}
        onMouseLeave={() => handleSearchBarHover(false)}
        onFocus={() => handleActiveState(true)}
        onBlur={() => handleActiveState(false)}
        sx={{
          width: '70%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          alignItems: 'center',
          marginLeft: '40px',
          backgroundColor: isSearchBarActive
            ? 'white'
            : 'rgba(255,255,255,0.5)',
          borderRadius: '2rem',
          padding: '10px 30px',
        }}
      >
        <FaSearch
          size={'32px'}
          fill={isSearchBarActive ? 'rgb(51,51,51)' : 'rgba(255,255,255,0.5)'}
        />
        <CustomInput
          placeholder="Search games"
          style={{
            width: '100%',
            color: `${
              isSearchBarActive ? 'rgb(51,51,51)' : 'rgba(255,255,255,0.5)'
            }`,
          }}
        />
      </Box>
    </Box>
  );
}
