import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

const StyledForm = styled(FormControl)({
  m: 1,
  width: "100%",
  margin: `0px`,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `#D1D2D4`,
    borderRadius: `10px`,
  },

  "& .MuiInputBase-root": {
    paddingRight: `27px`,
  },

  "& .MuiFormLabel-root": {
    paddingLeft: `15px`,
    paddingRight: `15px`,
    backgroundColor: `#fff`,
  },
});

const SearchBar = ({ value, onChange }: any) => {
  return (
    <StyledForm variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        type="text"
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchIcon sx={{ color: `#EE7623` }} />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </StyledForm>
  );
};

export default SearchBar;