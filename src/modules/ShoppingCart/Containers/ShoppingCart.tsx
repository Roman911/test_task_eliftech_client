import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Snackbar, Typography } from '@mui/material'
import { useTypedSelector } from '../../../hooks'
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
  const [isOpen, setOpen] = React.useState(false)
  const [createUser] = useMutation(CREATE_USER)
  const { products } = useTypedSelector(state => state.cart)
  const methods = useForm<IFormInput>({ mode: "onTouched", defaultValues, resolver: yupResolver(schema) })
  const { handleSubmit, reset } = methods
  const totalPrice = Math.round(products.map(i => i.sum * Number(i.product.price)).reduce((sum, current) => sum + current, 0) * 100) / 100

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const { address, email, phone, name } = data
    const prod = products.map(i => i.product._id)

    createUser({
      variables: {
        input: {
          address, email, phone, name, totalPrice: String(totalPrice), products: prod
        }
      }
    }).then(data => {
      if (data) {
        setOpen(true)
        reset()
        setTimeout(() => {
          setOpen(false)
        }, 5000)
      }
    })
  }

  if (products.length === 0) return <Typography variant="h3" marginTop={6} padding={4}>Your basket is empty...</Typography>

  return <FormProvider {...methods}>
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <ShoppingCartComponent products={products} totalPrice={totalPrice} />
      <Snackbar
        open={isOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        message="The order has been sent"
      />
    </Box>
  </FormProvider>
}

export default ShoppingCart