import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form Data:', formData);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrorMessage('');
      setIsOpen(false);
    } else {
      setErrorMessage('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className=" z-10 p-6  bg-transparent flex justify-center items-center">
      <button className="px-4 py-2 bg-blue-500 hover:scale-110 text-white rounded font-bold text-[20px]" onClick={() => setIsOpen(true)}>Get in Touch</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <input className="w-full p-3 mb-4 border rounded" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <input className="w-full p-3 mb-4 border rounded" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              <input className="w-full p-3 mb-4 border rounded" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <textarea className="w-full p-3 mb-4 border rounded h-32" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
              <div className="flex justify-end space-x-4">
                <button type="button" className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setIsOpen(false)}>Close</button>
                <button type="submit" className={`px-4 py-2 rounded ${isFormValid() ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'}`}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
