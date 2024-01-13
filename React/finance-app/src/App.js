import React, { useState, useEffect } from 'react';
import api from './api';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: '',
  });
  const [editTransactionId, setEditTransactionId] = useState(null);

  const fetchTransactions = async () => {
    const response = await api.get('/transactions/');
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (editTransactionId) {
      // If editing, trigger the PUT request
      await api.put(`/transactions/${editTransactionId}`, formData);
    } else {
      // If not editing, trigger the POST request
      await api.post('/transactions/', formData);
    }

    // Reset the form and fetch updated transactions
    setFormData({
      amount: '',
      category: '',
      description: '',
      is_income: false,
      date: '',
    });
    setEditTransactionId(null);
    fetchTransactions();
  };

  const handleEdit = (transactionId) => {
    // Find the transaction by ID and set the form data for editing
    const selectedTransaction = transactions.find((transaction) => transaction.id === transactionId);
    if (selectedTransaction) {
      setFormData(selectedTransaction);
      setEditTransactionId(transactionId);
    }
  };

  const handleDelete = async (transactionId) => {
    // Trigger the DELETE request
    await api.delete(`/transactions/${transactionId}`);
    fetchTransactions();
  };

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="#">
            Transaction Tracker App
          </a>
        </div>
      </nav>
      <div className='container'>
        <form onSubmit={handleFormSubmit}>
          
          <div className='mb-3 mt-3'>
            <label htmlFor='amount' className='form-label'>
              Amount
            </label>
            <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.amount} />
          </div>

          <div className='mb-3'>
            <label htmlFor='category' className='form-label'>
              Category
            </label>
            <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.category} />
          </div>

          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description} />
          </div>

          <div className='mb-3'>
            <label htmlFor='is_income' className='form-label'>
              Income (Check if True)
            </label>
            <input type='checkbox' id='is_income' name='is_income' onChange={handleInputChange} value={formData.is_income} />
          </div>

          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date} />
          </div>

          <button type='submit' className='btn btn-primary'>
            {editTransactionId ? 'Update' : 'Submit'}
          </button>
        </form>

        <table className='table table-striped table-borderd table-hover'>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Income?</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>${transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.is_income ? 'Yes' : 'No'}</td>
                <td>{transaction.date}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-info btn-sm mx-1'
                    onClick={() => handleEdit(transaction.id)}
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
