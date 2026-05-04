import axios from 'axios';

const BASE_URL = 'http://localhost:8080/addressbook';

class AddressBookService {
    getAllAddressBooks() {
        return axios.get(BASE_URL);
    }

    getAddressBookById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    createAddressBook(dto) {
        return axios.post(BASE_URL, dto);
    }

    updateAddressBook(id, dto) {
        return axios.put(`${BASE_URL}/${id}`, dto);
    }

    deleteAddressBook(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new AddressBookService();
