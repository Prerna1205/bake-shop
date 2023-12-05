import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { address } from "../../redux/userSlice";
import "./AccountsIndex.css";
const AddressForm = () => {
  const dataSession = sessionStorage.getItem("user");
  const [addresses, setAddresses] = useState([
    {
      street: "",
      city: "",
      state: "",
      zip: ""
     
    },
  ]);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([
    { street: "", city: "", state: "", zip: "" },
  ]);

  const addAddress = () => {
    setAddresses([...addresses, { street: "", city: "", state: "", zip: "" }]);
    setErrors([...errors, { street: "", city: "", state: "", zip: "" }]);
  };

  const removeAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);

    const newErrors = [...errors];
    newErrors.splice(index, 1);
    setErrors(newErrors);
  };

  const validateAddress = (address, index) => {
    let valid = true;
    const newErrors = [...errors];
    const { street, city, state, zip } = address;

    if (street.trim() === "") {
      newErrors[index].street = "Street is required";
      valid = false;
    } else {
      newErrors[index].street = "";
    }

    if (city.trim() === "") {
      newErrors[index].city = "City is required";
      valid = false;
    } else {
      newErrors[index].city = "";
    }

    if (state.trim() === "") {
      newErrors[index].state = "State is required";
      valid = false;
    } else {
      newErrors[index].state = "";
    }

    if (zip.trim() === "") {
      newErrors[index].zip = "ZIP is required";
      valid = false;
    } else {
      newErrors[index].zip = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = addresses.every((address, index) =>
      validateAddress(address, index)
    );

    if (allValid) {
      // Submit the form data or perform further actions
      console.log("Submitted addresses:", addresses);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...addresses];
    newAddresses[index] = { ...newAddresses[index], [name]: value };
    setAddresses(newAddresses);
  };

  const sendAddress = () => {
    dispatch(address({ user: dataSession ? JSON.parse(dataSession) : null,address:addresses}));
  };

  return (
    <div className="form-container">
      <h2>Address Details</h2>
      <form onSubmit={handleSubmit}>
        {addresses.map((address, index) => (
          <div key={index}>
            <div className="form-group">
              <label>Street</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index].street ? "error" : ""}
              />
              <div className="error-message">{errors[index].street}</div>
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index].city ? "error" : ""}
              />
              <div className="error-message">{errors[index].city}</div>
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index].state ? "error" : ""}
              />
              <div className="error-message">{errors[index].state}</div>
            </div>
            <div className="form-group">
              <label>ZIP</label>
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index].zip ? "error" : ""}
              />
              <div className="error-message">{errors[index].zip}</div>
            </div>
            <div className="form-group">
              <button type="button" onClick={() => removeAddress(index)}>
                Remove Address
              </button>
            </div>
          </div>
        ))}
        <div className="form-group">
          <button type="button" onClick={addAddress}>
            Add Address
          </button>
          <button type="submit" onClick={() => sendAddress()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
