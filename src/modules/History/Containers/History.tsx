import React from "react"
import { useLazyQuery } from "@apollo/react-hooks"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from '@mui/material'
import { HistoryComponent } from '../Components'
import { USER_ALL } from './queries'

const schema = yup.object().shape({
  order: yup.string(),
  email: yup.string().email(),
  phone: yup.string()
})

interface IFormInput {
  order: string
  email: string
  phone: string
}

const defaultValues = {
  order: '',
  email: '',
  phone: ''
}

const History: React.FC = () => {
  const [isSubmit, setSubmit] = React.useState(false)
  const methods = useForm<IFormInput>({ mode: "onTouched", defaultValues, resolver: yupResolver(schema) })
  const { handleSubmit } = methods
  const [loadUser, { data }] = useLazyQuery(USER_ALL)

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { order, email, phone } = data
    setSubmit(true)
    loadUser({
      variables: {
        input: {
          order, email, phone
        }
      }
    })
  }

  return <FormProvider {...methods}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <HistoryComponent users={data?.users} isSubmit={isSubmit} />
    </Box>
  </FormProvider>
}

export default React.memo(History)