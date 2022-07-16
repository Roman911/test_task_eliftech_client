import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Typography } from '@mui/material'
import { useActions, useTypedSelector } from '../../../hooks'
import { ShoppingCartComponent } from '../Components'
import { CREATE_USER } from './mutations'

const schema = yup.object().shape({
  address: yup.string().min(10).max(100).required(),
  email: yup.string().required().email(),
  phone: yup.string().min(10).required(),
  name: yup.string().min(3).max(20).required()
})

interface IFormInput {
  address: string
  email: string
  phone: string
  name: string
}

const defaultValues = {
  address: '',
  email: '',
  phone: '',
  name: ''
}

const ShoppingCart: React.FC = () => {
  const [orderId, setOrderId] = React.useState('')
  const [createUser, { data }] = useMutation(CREATE_USER)
  const { products } = useTypedSelector(state => state.cart)
  const methods = useForm<IFormInput>({ mode: "onTouched", defaultValues, resolver: yupResolver(schema) })
  const { handleSubmit, reset } = methods
  const totalPrice = Math.round(products.map(i => i.sum * Number(i.product.price)).reduce((sum, current) => sum + current, 0) * 100) / 100
  const { resetProducts } = useActions()

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { address, email, phone, name } = data
    const prod = products.map(i => i.product._id)

    console.log({ address, email, phone, name, totalPrice: String(totalPrice), products: prod })

    createUser({
      variables: {
        input: {
          address, email, phone, name, totalPrice: String(totalPrice), products: prod
        }
      }
    })
  }

  React.useEffect(() => {
    if (data) {
      setOrderId(data.createUser._id)
      reset()
      resetProducts()
    }
  }, [data])

  if (data) return <Typography variant="h4" marginTop={6} padding={4}>Order id {orderId}</Typography>

  if (products.length === 0) return <Typography variant="h4" marginTop={6} padding={4}>Your basket is empty...</Typography>

  return <FormProvider {...methods}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <ShoppingCartComponent products={products} totalPrice={totalPrice} />
    </Box>
  </FormProvider>
}

export default ShoppingCart