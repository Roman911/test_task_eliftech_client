import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { TextField } from '@mui/material'

type Props = {
  name: string
  label: string
}

const MyInput: React.FC<Props> = ({ name, label }) => {
  const { control, formState: { errors } } = useFormContext()

  return <Controller
    name={name}
    control={control}
    render={({ field }) => <TextField
      {...field}
      label={label}
      variant="outlined"
      error={!!errors[name]}
      sx={{ width: '100%', margin: '10px 0' }}
    />}
  />
}

export default MyInput