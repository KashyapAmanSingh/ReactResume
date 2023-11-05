/* eslint-disable react/prop-types */
import HomeIcon from '@mui/icons-material/Home';

const Address = ({address}) => {
  return (
    <div>
         <h5 className="mt-1 ">
                <HomeIcon className="mb-1" color="dark" />
                Address</h5>
              <p className="d-flex ">
                {`${   address.city} ${address.country} ${address.pincode}`}
              </p>
    </div>
  )
}

export default Address