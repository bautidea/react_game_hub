import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

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
    <FormControl fullWidth sx={{ paddingTop: '20px' }}>
      <InputLabel
        shrink
        id="game-order-selector-label"
        sx={{
          fontSize: '1.2rem',
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
        sx={{ fontSize: '1.2rem' }}
      >
        {sortingMapper.map((sortValue, ind) => (
          <MenuItem
            key={ind}
            value={sortValue.value}
            sx={{ fontSize: '1.2rem', padding: '10px' }}
          >
            {sortValue.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
