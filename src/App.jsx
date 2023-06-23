import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import './App.css';
import { useForm } from 'react-hook-form';

const dropdownOptions = [
  {
    id: '1',
    value: 'Dropdown Option',
    label: 'Dropdown Option',
  },
  {
    id: '2',
    value: 'Dropdown Option 1',
    label: 'Dropdown Option 1',
  },
  {
    id: '3',
    value: 'Dropdown Option 2',
    label: 'Dropdown Option 2',
  },
];

const errorMsg = 'Error message informing me of a problem';

function App() {
  const defaultValues = {
    userName: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ defaultValues, mode: 'onChange' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Grid className='App'>
      <form style={{ width: '547px' }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          sx={{
            width: '100%',
            display: 'flex',
            m: 'auto',
            justifyContent: 'flex-start',
          }}
        >
          <Box position='relative' mb='58px'>
            <TextField
              autoComplete='off'
              name='userName'
              fullWidth
              type='text'
              placeholder='User Name'
              label='Name'
              error={errors.userName}
              {...register('userName', {
                required: true,
              })}
              sx={{
                '& label': {
                  top: -45,
                  left: -13,
                  fontSize: 12,
                  fontWeight: 'bold',
                },
                '& legend': {
                  display: 'none',
                },
              }}
            />
            {errors.userName && (
              <Typography color='tomato'>{errorMsg}</Typography>
            )}
          </Box>

          <Box position='relative' mb='58px'>
            <TextField
              fullWidth
              type='password'
              helperText={
                errors.password
                  ? ''
                  : 'Your password is between 4 and 12 characters'
              }
              {...register('password', {
                required: true,
              })}
              label='Password'
              error={errors.password}
              sx={{
                '.MuiFormHelperText-root': { ml: 0 },
                '& label': {
                  top: -45,
                  left: -13,
                  fontSize: 12,
                  fontWeight: 'bold',
                },
                '& legend': {
                  display: 'none',
                },
              }}
              placeholder='Enter Password'
            />
            {errors.password && (
              <Typography color='tomato'>{errorMsg}</Typography>
            )}
          </Box>

          <Box position='relative' mb='32px'>
            <TextField
              fullWidth
              name='inputTextField'
              defaultValue='input Text Label'
              type='text'
              label='Input text label'
              error={errors.inputTextField}
              {...register('inputTextField', {
                required: true,
              })}
              sx={{
                '& label': {
                  top: -45,
                  left: -13,
                  fontSize: 12,
                  fontWeight: 'bold',
                },
                '& legend': {
                  display: 'none',
                },
              }}
            />
            {errors.inputTextField && (
              <Typography color='tomato'>{errorMsg}</Typography>
            )}
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            label='Remember me'
            name='rememberMe'
            sx={{ mb: '32px' }}
            {...register('rememberMe')}
          />

          <FormControlLabel
            control={<Switch />}
            label='off'
            name='switcher'
            sx={{ mb: '32px' }}
            {...register('switcher')}
          />

          <RadioGroup
            defaultValue='Radio section 1'
            name='radioButtonsGroup'
            sx={{ mb: '52px', display: 'flex', gap: '32px' }}
            {...register('radioButtonsGroup')}
          >
            <FormControlLabel
              value='Radio section 1'
              control={<Radio />}
              label='Radio section 1'
            />

            <FormControlLabel
              value='Radio section 2'
              control={<Radio />}
              label='Radio section 2'
            />
            <FormControlLabel
              value='Radio section 3'
              control={<Radio />}
              label='Radio section 3'
            />
          </RadioGroup>

          <Box position='relative' sx={{ mb: '32px' }}>
            <TextField
              fullWidth
              select
              name='dropDownTitle'
              defaultValue={dropdownOptions[0].value}
              label='Dropdown Title'
              sx={{
                '& label': {
                  top: -45,
                  left: -13,
                  fontSize: 12,
                  fontWeight: 'bold',
                },
                '& legend': {
                  display: 'none',
                },
              }}
              {...register('dropDownTitle')}
            >
              {dropdownOptions.map(({ id, value, label }) => (
                <MenuItem key={id} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Grid container justifyContent='space-between'>
            <Button
              sx={{ width: 162, height: '56px' }}
              variant='outlined'
              type='button'
            >
              Cancel
            </Button>

            <Button
              sx={{
                width: 162,
                height: '56px',
                '&:active': {
                  background: '#7A5CFA',
                  color: '#fff',
                },
              }}
              variant='outlined'
              type='submit'
              disabled={!isValid}
            >
              Next
            </Button>
          </Grid>
        </FormControl>
      </form>
    </Grid>
  );
}

export default App;
