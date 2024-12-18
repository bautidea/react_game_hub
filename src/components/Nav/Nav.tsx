import { Box, InputBase, styled } from '@mui/material';
import logo from '../../assets/logo/logo.webp';
import { FaSearch } from 'react-icons/fa';
import { TbZoomCancel } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const CustomInput = styled(InputBase)(() => ({
  fontSize: '1.2rem',
}));

interface Props {
  sideBarVisible: boolean;
  handleSearchBarQuery: (searchString: string) => void;
  handleIconSideBarClick: () => void;
}

export function Nav({
  sideBarVisible,
  handleSearchBarQuery,
  handleIconSideBarClick,
}: Props) {
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
  const [searchBarHovered, setSearchBarHovered] = useState<boolean>(false);
  const [searchBarValue, setSearchBarValue] = useState<string>('');

  function handleSearchBarHover(value: boolean) {
    setSearchBarHovered(value);
  }

  function handleActiveState(value: boolean) {
    setSearchBarActive(value);
  }

  const isSearchBarActive = searchBarActive || searchBarHovered ? true : false;

  const handleSearchBarChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchBarValue(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearchBarQuery(searchBarValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchBarValue]);

  return (
    <Box
      sx={{
        height: '6rem',
        display: 'flex',
        flexDirection: 'row',
        margin: '15px 40px 0',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
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
            width: {
              xs: '80%',
              md: '70%',
            },
          }}
        >
          <FaSearch
            size={'32px'}
            fill={isSearchBarActive ? 'rgb(51,51,51)' : 'rgba(255,255,255,0.5)'}
          />

          <CustomInput
            value={searchBarValue}
            onChange={(event) => handleSearchBarChange(event)}
            placeholder="Search games"
            style={{
              width: '100%',
              color: `${
                isSearchBarActive ? 'rgb(51,51,51)' : 'rgba(255,255,255,0.5)'
              }`,
            }}
          />

          {searchBarValue && (
            <TbZoomCancel
              onClick={() => setSearchBarValue('')}
              size={'32px'}
              color={
                isSearchBarActive ? 'rgb(51,51,51)' : 'rgba(255,255,255,0.5)'
              }
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: 'none', xs: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '30px',
        }}
      >
        {!sideBarVisible && (
          <IoMenu size={'48px'} onClick={handleIconSideBarClick} />
        )}
        {sideBarVisible && (
          <IoClose
            size={'48px'}
            onClick={handleIconSideBarClick}
            style={{ zIndex: '3' }}
          />
        )}
      </Box>
    </Box>
  );
}
