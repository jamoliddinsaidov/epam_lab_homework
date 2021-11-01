import React, { useState } from 'react'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'

// components
import LoadForm from '../../components/Forms/LoadForm'

const CreateLoad = () => {
  // states
  const [name, setName] = useState('')
  const [payload, setPayload] = useState('')
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [length, setLength] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { createLoad } = useLoad()

  // handlers
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = getToken()
    const load = {
      name,
      payload,
      pickup_address: pickup,
      delivery_address: delivery,
      dimensions: {
        width,
        length,
        height,
      },
    }

    try {
      const { data } = await createLoad(token, load)
      setError('')
      setSuccess(data.message)

      setName('')
      setPayload('')
      setPickup('')
      setDelivery('')
      setWidth('')
      setHeight('')
      setLength('')

      setTimeout(() => {
        setSuccess('')
      }, 800)
    } catch (error) {
      setSuccess('')
      setError(error.message)
    }
  }

  const title = 'Create a new load'
  return (
    <LoadForm
      title={title}
      handleSubmit={handleSubmit}
      error={error}
      success={success}
      name={name}
      setName={setName}
      payload={payload}
      setPayload={setPayload}
      pickup={pickup}
      setPickup={setPickup}
      delivery={delivery}
      setDelivery={setDelivery}
      width={width}
      setWidth={setWidth}
      height={height}
      setHeight={setHeight}
      length={length}
      setLength={setLength}
      isEdit={false}
    />
  )
}

export default CreateLoad
