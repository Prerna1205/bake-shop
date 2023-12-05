import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceSidebar from "./PriceSidebar";
import Stepper from "./Stepper";
import { useSnackbar } from "notistack";
import { SAVE_SHIPPING_INFO } from "../../redux/cartSlice";
import { useHistory } from "react-router-dom";
import MetaData from "../Common/MetaData";
import states from "../../utils/states";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { shippingInfo, items } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [country, setCountry] = useState("IN");
  const [state, setState] = useState(shippingInfo.state);
  const [pincode, setPincode] = useState(shippingInfo.pincode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      enqueueSnackbar("Invalid Phone Number", { variant: "error" });
      return;
    }
    dispatch(
      SAVE_SHIPPING_INFO({ address, city, country, state, pincode, phoneNo })
    );
    navigate.push("/order/confirm");
  };

  return (
    <>
      <MetaData title="Bake shop: Shipping Details" />
      {/* <!-- row --> */}
      <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7 overflow-hidden">
        {/* <!-- cart column --> */}
        <div className="flex-1">
          <Stepper activeStep={1}>
            <div className="w-full bg-white">
              <form
                onSubmit={shippingSubmit}
                autoComplete="off"
                className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-1 sm:mx-8 my-4"
              >
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  label="Address"
                  variant="outlined"
                  required
                />

                <div className="flex gap-6">
                  <TextField
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    type="number"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                    required
                  />
                  <TextField
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    type="number"
                    label="Phone No"
                    fullWidth
                    variant="outlined"
                    required
                  />
                </div>

                <div className="flex gap-6">
                  <TextField
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    label="City"
                    fullWidth
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="Landmark (Optional)"
                    fullWidth
                    variant="outlined"
                  />
                </div>

                <div className="flex gap-6">
                  <FormControl fullWidth>
                    <InputLabel id="country-select">Country</InputLabel>
                    <Select
                      labelId="country-select"
                      id="country-select"
                      defaultValue={country}
                      disabled
                      label="Country"
                      // onChange={(e) => setCountry(e.target.value)}
                    >
                      <MenuItem value={"IN"}>India</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth disabled={country ? false : true}>
                    <InputLabel id="state-select">State</InputLabel>
                    <Select
                      labelId="state-select"
                      id="state-select"
                      value={state}
                      label="State"
                      onChange={(e) => setState(e.target.value)}
                      required
                    >
                      {states.map((item) => (
                        <MenuItem key={item.code} value={item.code}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <button
                  type="submit"
                  className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none"
                >
                  save and deliver here
                </button>
              </form>
            </div>
          </Stepper>

          <PriceSidebar cartItems={items} />
        </div>
      </div>
    </>
  );
};

export default Shipping;
