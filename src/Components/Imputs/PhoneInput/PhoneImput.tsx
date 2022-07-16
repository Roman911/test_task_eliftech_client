import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import NumberFormat from 'react-number-format'
import { TextField } from '@mui/material'

type Props = {
  name: string
}

const PhoneInput: React.FC<Props> = ({ name }) => {
  const { control, formState: { errors } } = useFormContext()

  return <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value, onBlur } }) => <NumberFormat
      customInput={TextField}
      label='Phone'
      sx={{ width: '100%' }}
      variant="outlined"
      helperText="+38 (XXX) XXX - XX - XX"
      error={!!errors[name]}
      onBlur={onBlur}
      allowNegative={false}
      format="+38 (###) ### - ## - ##"
      mask="_"
      onValueChange={(v) => onChange(v.value)}
      value={value}
    />}
  />
}

export default PhoneInput