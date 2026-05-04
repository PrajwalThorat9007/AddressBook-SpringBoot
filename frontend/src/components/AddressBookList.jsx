import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddressBookService from '../services/AddressBookService';

const AddressBookList = () => {
    const [addressBooks, setAddressBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAddressBooks();
    }, []);

    const fetchAddressBooks = () => {
        setLoading(true);
        AddressBookService.getAllAddressBooks()
            .then(response => {
                setAddressBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching address books:', error);
                setError('Failed to fetch address books.');
                setLoading(false);
            });
    };

    const deleteAddressBook = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this entry?");
        if (confirmDelete) {
            AddressBookService.deleteAddressBook(id)
                .then(() => {
                    fetchAddressBooks(); // refresh list
                })
                .catch(error => {
                    console.error('Error deleting address book:', error);
                });
        }
    };

    if (loading) return <div className="message-container"><p>Loading...</p></div>;
    if (error) return <div className="message-container"><p className="error">{error}</p></div>;

    return (
        <div className="list-container">
            <div className="list-header">
                <h2>Address Book Directory</h2>
                <Link to="/add" className="btn btn-primary">
                    + Add New Contact
                </Link>
            </div>

            {addressBooks.length === 0 ? (
                <div className="empty-state">
                    <p>No contacts found. Add a new contact to get started.</p>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="address-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addressBooks.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.city}</td>
                                    <td className="actions-cell">
                                        <Link to={`/edit/${contact.id}`} className="btn btn-secondary btn-sm">
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => deleteAddressBook(contact.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AddressBookList;
