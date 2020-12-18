import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { AccountCircle, Label } from "@material-ui/icons";
import React from "react";
import "./style.scss";
interface Props {
  onChange?: () => {};
  disable?: boolean;
  label: string;
  placeholder?: string;
  value?: string;
  type?: string;
  start?: any;
  required?: boolean;
  end?: any;
}
const useStyles = makeStyles((theme: any) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "20px",
  },
}));

export const TextFieldInput = (props: Props) => {
  const {
    onChange,
    disable,
    label,
    placeholder,
    value,
    type,
    start,
    end,
    required,
  } = props;
  const classes = useStyles();
  const onInputChange = (e: any) => {};
  return (
    <div className="text-field-input">
      <TextField
        required={required}
        className={classes.textField}
        id="text-field-input"
        label={label}
        type={type || "text"}
        style={{ margin: 8 }}
        placeholder={placeholder}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">{start}</InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">{end}</InputAdornment>,
        }}
        value={value}
        margin="normal"
        disabled={disable}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </div>
  );
};