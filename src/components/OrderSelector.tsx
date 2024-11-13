import { FormControl, InputLabel, Select } from '@mui/material';

export function OrderSelector() {
  return (
    <FormControl>
      <InputLabel id="game-order-selector-label">Order by:</InputLabel>
      <Select
        labelId="game-order-selector-label"
        id="game-order-selector"
      ></Select>
    </FormControl>
  );
}
