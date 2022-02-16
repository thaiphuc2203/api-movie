import { TextField, FormHelperText, FormControl, IconButton, InputAdornment , InputLabel, OutlinedInput} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from "react-hook-form";

PasswordField.propTypes = {

};

function PasswordField(props: any) {

    const { form, name, label, disabled } = props
    const { formState: { errors } } = form
    const hasError = errors[name]
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <FormControl  error={!!hasError} variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={toggleShowPassword}
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    )}
                />
                <FormHelperText>
                    {errors[name]?.message}
                </FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;