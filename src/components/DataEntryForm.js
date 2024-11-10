import React, { useState } from 'react';
import './DataEntryForm.css';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store submitted data for display
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Data Entry Form</h2>

        <div className="form-group">
          <div className="half-width">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="half-width">
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <input
          
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="1234 Main St"
          />
        </div>

        <div className="form-group full-width">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>

        <div className="form-group">
          <div className="third-width">
            <label>City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="third-width">
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              required
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="third-width">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="terms"
            required
            checked={formData.terms}
            onChange={handleChange}
          />
          <label>Agree Terms & Condition?</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Information</h3>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default DataEntryForm;
