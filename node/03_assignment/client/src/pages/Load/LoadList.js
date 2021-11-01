import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { useLoad } from '../../contexts/LoadContext'
import { getToken } from '../../utils/localStorageConfig'
import { formatDate } from '../../utils/formatDate'

const headers = [
  `#`,
  'Name',
  'Creator',
  'Driver',
  'Status',
  'State',
  'Pickup Address',
  'Delivery Address',
  'Payload',
  'Dimensions (W-H-L)',
  'Created date',
  'View',
  'Post',
  'Edit',
  'Delete',
]

const LoadList = () => {
  const { getLoads, deleteLoad, postLoad } = useLoad()
  const { getUserEmailById, getUserRole } = useUser()
  const [loads, setLoads] = useState([])
  const [creators, setCreators] = useState([])
  const [drivers, setDrivers] = useState([])
  const [userRole, setUserRole] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const token = getToken()

  // handlers
  const deleteHandler = async (id) => {
    try {
      const { data } = await deleteLoad(token, id)
      setError('')
      setSuccess(data.message)

      setTimeout(() => {
        setSuccess('')
        window.location.reload()
      }, 500)
    } catch (error) {
      setSuccess('')
      setError('Something went wrong, please try again.')

      setTimeout(() => {
        setError('')
      }, 1000)
    }
  }

  const postLoadHandler = async (id) => {
    try {
      const { data } = await postLoad(token, id)

      if (data.driver_found) {
        setError('')
        setSuccess(data.message)

        setTimeout(() => {
          setSuccess('')
          window.location.reload()
        }, 800)
      } else {
        setSuccess('')
        setError(data.message)

        setTimeout(() => {
          setError('')
        }, 1000)
      }
    } catch (error) {
      setSuccess('')
      setError(error.message)

      setTimeout(() => {
        setError('')
      }, 1000)
    }
  }

  useEffect(() => {
    const fetchTrucks = async () => {
      // get loads from db
      const { data } = await getLoads(token)
      setLoads(data.loads)

      // get emails
      data.loads.forEach(async (load) => {
        const shipperEmail = await getUserEmailById(token, load.created_by)
        const emailShipper = shipperEmail.data.userEmail
        setCreators((prev) => [...prev, emailShipper])

        const driverEmail = await getUserEmailById(token, load.assigned_to ?? 0)
        const emailDriver = driverEmail.data.userEmail
        setDrivers((prev) => [...prev, emailDriver])
      })

      const role = await getUserRole(token)
      setUserRole(role)
    }
    fetchTrucks()
  }, [getLoads, token, getUserRole, getUserEmailById])

  return (
    <div className='container-fluid px-5'>
      {loads.length > 0 && creators.length > 0 ? (
        <>
          <h2 className='text-center my-4 fw-bold'>The list of loads</h2>

          {success && <div className='text-small form-alert text-center text-success my-3'>{success}</div>}
          {error && <div className='text-small form-alert text-center text-danger my-3'>{error}</div>}

          <div className='table-responsive'>
            <table className='table table-hover load_table'>
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx} scope='col'>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loads.map((load, idx) => (
                  <tr key={idx}>
                    <th scope='row'>{idx + 1}</th>
                    <td>{load.name}</td>
                    <td>{creators[0]}</td>
                    {userRole === 'SHIPPER' ? <td>{drivers[idx] === null ? 'None' : drivers[idx]}</td> : <td>You</td>}
                    <td>{load.status}</td>
                    <td>{load.state}</td>
                    <td>{load.pickup_address}</td>
                    <td>{load.delivery_address}</td>
                    <td>{load.payload}</td>
                    <td>{`${load.dimensions.width}-${load.dimensions.height}-${load.dimensions.length}`}</td>
                    <td>{formatDate(load.created_date)}</td>
                    <td>
                      <Link
                        to={`/loads/${load._id}/shipping_info`}
                        className={`btn btn-outline-dark ${userRole === 'DRIVER' ? 'disabled' : ''}`}>
                        <i className='bi bi-eye'></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className={`btn btn-outline-dark ${load.assigned_to ? 'active' : ''}`}
                        onClick={() => postLoadHandler(load._id)}
                        disabled={userRole === 'DRIVER'}>
                        <i className='bi bi-truck'></i>
                      </button>
                    </td>
                    <td>
                      <Link
                        className={`btn btn-outline-dark ${
                          load.assigned_to || userRole === 'DRIVER' ? 'disabled' : ''
                        }`}
                        to={`/loads/edit/${load._id}`}>
                        <i className='bi bi-pencil'></i>
                      </Link>
                    </td>
                    <td>
                      <button
                        className='btn btn-outline-dark'
                        onClick={() => deleteHandler(load._id)}
                        disabled={load.assigned_to || userRole === 'DRIVER' ? true : false}>
                        <i className='bi bi-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default LoadList
