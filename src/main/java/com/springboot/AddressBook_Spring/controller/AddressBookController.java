package com.springboot.AddressBook_Spring.controller;

import com.springboot.AddressBook_Spring.dto.AddressBookDTO;
import com.springboot.AddressBook_Spring.model.AddressBook;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/addressbook")
public class AddressBookController {
    List<AddressBook> list = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<AddressBook>> getAll() {
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressBook> getById(@PathVariable int id){
        for (AddressBook a : list) {
            if (a.getId() == id) {
                return ResponseEntity.ok(a);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<AddressBook> add(@RequestBody AddressBookDTO dto){
        AddressBook address =
                new AddressBook(list.size()+1, dto);

        list.add(address);

        return ResponseEntity.ok(address);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressBook> update(@PathVariable int id,@RequestBody AddressBookDTO dto){
        for (AddressBook a : list) {

            if (a.getId() == id) {
                a.setName(dto.getName());
                a.setCity(dto.getCity());
                return ResponseEntity.ok(a);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id){

        list.removeIf(a -> a.getId() == id);
        return ResponseEntity.ok("Deleted");
    }

}
