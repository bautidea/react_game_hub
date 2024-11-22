import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import greenDot from '../../assets//Emojis/greenDot.png';

interface Props {
  value: string;
  handleOrderSelect: (clickedOrder: string) => void;
}

export function OrderSelector({ value, handleOrderSelect }: Props) {
  function handleChange(event: SelectChangeEvent) {
    handleOrderSelect(event.target.value);
  }

  const sortingMapper = [
    { value: '-added', label: 'Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Released' },
    { value: '-rating', label: 'Rating' },
    { value: '', label: 'Relevance' },
    { value: '-metacritic', label: 'Popularity' },
  ];

  return (
    <FormControl
      fullWidth
      sx={{
        paddingTop: '20px',
      }}
    >
      <InputLabel
        shrink
        variant="standard"
        id="game-order-selector-label"
        style={{
          fontSize: '1.4rem',
          color: 'rgba(255, 255, 255, 0.8)',
          top: '-5px',
        }}
      >
        Order by:
      </InputLabel>

      <Select
        labelId="game-order-selector-label"
        id="game-order-selector"
        onChange={handleChange}
        value={value}
        label="Order by"
        displayEmpty
        sx={{
          fontSize: '1.2rem',
          backgroundColor: '#212529',
        }}
        renderValue={(selectedValue) => {
          const selected = sortingMapper.find(
            (sortValue) => sortValue.value === selectedValue
          );
          return selected?.label;
        }}
      >
        {sortingMapper.map((sortValue, ind) => (
          <MenuItem
            key={ind}
            value={sortValue.value}
            sx={{
              fontSize: '1.2rem',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {sortValue.label}
            {value === sortValue.value ? (
              <img
                src={greenDot}
                style={{
                  objectFit: 'cover',
                  width: '15px',
                  aspectRatio: '1/1',
                  opacity: '0.8',
                }}
              />
            ) : (
              ''
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
