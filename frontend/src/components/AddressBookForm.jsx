import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AddressBookService from '../services/AddressBookService';

const AddressBookForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            AddressBookService.getAddressBookById(id)
                .then(response => {
                    setName(response.data.name);
                    setCity(response.data.city);
                })
                .catch(error => {
                    console.error('Error fetching contact:', error);
                    setError('Failed to fetch contact details.');
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name.trim() || !city.trim()) {
            setError('Please fill out all fields.');
            return;
        }

        const contactObj = { name, city };
        setIsSubmitting(true);
        setError('');

        if (id) {
            AddressBookService.updateAddressBook(id, contactObj)
                .then(() => {
                    navigate('/');
                })
                .catch(err => {
                    console.error('Error updating:', err);
                    setError('Failed to update contact.');
                    setIsSubmitting(false);
                });
        } else {
            AddressBookService.createAddressBook(contactObj)
                .then(() => {
                    navigate('/');
                })
                .catch(err => {
                    console.error('Error creating:', err);
                    setError('Failed to create contact.');
                    setIsSubmitting(false);
                });
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h2>{id ? 'Edit Contact' : 'Add New Contact'}</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter full name"
                            className="form-control"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city"
                            className="form-control"
                        />
                    </div>

                    <div className="form-actions">
                        <Link to="/" className="btn btn-secondary">
                            Cancel
                        </Link>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Saving...' : 'Save Contact'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressBookForm;
