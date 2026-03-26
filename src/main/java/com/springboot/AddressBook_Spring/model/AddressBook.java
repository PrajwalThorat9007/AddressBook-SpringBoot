package com.springboot.AddressBook_Spring.model;

import com.springboot.AddressBook_Spring.dto.AddressBookDTO;

public class AddressBook {


    private int id;
    private String name;
    private String city;


    public AddressBook(){}

    public AddressBook(int id, AddressBookDTO dto){
        this.id=id;
        this.name=dto.getName();
        this.city=dto.getCity();
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
