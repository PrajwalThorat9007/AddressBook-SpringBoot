package com.springboot.AddressBook_Spring.controller;

import com.springboot.AddressBook_Spring.service.AddressBookService;
import org.springframework.beans.factory.annotation.Autowired;
import com.springboot.AddressBook_Spring.dto.AddressBookDTO;
import com.springboot.AddressBook_Spring.model.AddressBook;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/addressbook")
public class AddressBookController {
    List<AddressBook> list = new ArrayList<>();

    @Autowired
    AddressBookService service;

    @GetMapping
    public ResponseEntity<List<AddressBook>> getAll() {

        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressBook> getById(
            @PathVariable int id) {

        AddressBook a = service.getById(id);

        return ResponseEntity.ok(a);
    }

    @PostMapping
    public ResponseEntity<AddressBook> add(
            @RequestBody AddressBookDTO dto) {

        return ResponseEntity.ok(
                service.add(dto)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressBook> update(
            @PathVariable int id,
            @RequestBody AddressBookDTO dto) {

        return ResponseEntity.ok(
                service.update(id, dto)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(
            @PathVariable int id) {

        service.delete(id);

        return ResponseEntity.ok("Deleted");
    }

}
