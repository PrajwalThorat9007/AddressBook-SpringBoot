package com.springboot.AddressBook_Spring.dto;

public class AddressBookDTO {
    private String name;
    private String city;

    public AddressBookDTO() {}

    public AddressBookDTO(String name, String city) {
        this.name = name;
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
