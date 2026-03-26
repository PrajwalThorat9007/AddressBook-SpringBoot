package com.springboot.AddressBook_Spring.service;

import com.springboot.AddressBook_Spring.dto.AddressBookDTO;
import com.springboot.AddressBook_Spring.model.AddressBook;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressBookService {

    List<AddressBook> list = new ArrayList<>();


    // get all
    public List<AddressBook> getAll() {
        return list;
    }


    // get by id
    public AddressBook getById(int id) {

        for (AddressBook a : list) {
            if (a.getId() == id) {
                return a;
            }
        }

        return null;
    }


    // add
    public AddressBook add(AddressBookDTO dto) {

        AddressBook address =
                new AddressBook(list.size() + 1, dto);

        list.add(address);

        return address;
    }


    // update
    public AddressBook update(int id, AddressBookDTO dto) {

        for (AddressBook a : list) {

            if (a.getId() == id) {

                a.setName(dto.getName());
                a.setCity(dto.getCity());

                return a;
            }
        }

        return null;
    }


    // delete
    public void delete(int id) {

        list.removeIf(a -> a.getId() == id);
    }
}