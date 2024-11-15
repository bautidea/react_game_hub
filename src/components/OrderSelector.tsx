import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Props {
  value: string | null;
  handleOrderSelect: (clickedOrder: string) => void;
}

export function OrderSelector({ value, handleOrderSelect }: Props) {
  function handleChange(event: SelectChangeEvent) {
    handleOrderSelect(event.target.value);
  }

  const sortingMapper: { [key: string]: string } = {
    'added': 'Added',
    'created': 'Created',
    'metacritic': 'Relevance',
    'name': 'Name',
    'released': 'Released',
    'rating': 'Rating',
    'updated': 'Updated',
  };

  return (
    <FormControl sx={{ minWidth: '120px' }}>
      <InputLabel id="game-order-selector-label">Order by:</InputLabel>
      <Select
        labelId="game-order-selector-label"
        id="game-order-selector"
        onChange={handleChange}
        value={value != null ? value : ''}
        label="Order by"
      >
        {Object.keys(sortingMapper).map((keyName, ind) => (
          <MenuItem key={ind} value={keyName}>
            {sortingMapper[keyName]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
