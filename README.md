# AddressBook Spring Boot Application

## Project Description

This project is a Spring Boot REST API for AddressBook application.
The application is developed step-by-step using different Use Cases (UC).
Each UC is implemented in a separate Git branch and then merged into main.

The application demonstrates:

* REST API development
* DTO and Model separation
* Service layer usage
* Dependency Injection using @Autowired
* ResponseEntity for HTTP responses

---

## Technologies Used

* Java 17
* Spring Boot
* Maven
* IntelliJ IDEA
* Postman / CURL
* Git & GitHub

---

## Project Structure

```
src/main/java/com/springboot/AddressBook_Spring

controller
service
model
dto
repository
```

---

# UC1 — Project Setup

### Objective

Create Spring Boot project to handle REST requests from AddressBook UI.

### Steps

* Created Spring Boot project using Spring Initializer
* Added Spring Web dependency
* Created packages:

  * controller
  * service
  * model
  * dto
  * repository
* Configured Git branch for UC1

### Branch

```
UC1-project-setup
```

---

# UC2 — Create REST Controller

### Objective

Create RestController to demonstrate HTTP methods.

### Implemented

* GET all
* GET by id
* POST
* PUT
* DELETE

### Used

* @RestController
* @RequestMapping
* @GetMapping
* @PostMapping
* @PutMapping
* @DeleteMapping
* ResponseEntity

### Tested using

* Postman
* CURL

### Branch

```
UC2-rest-controller-http-methods
```

---

# UC3 — Introduce DTO and Model

### Objective

Separate DTO and Model classes.

### Changes

* Created AddressBookDTO
* Modified AddressBook model
* Controller now receives DTO
* Model created using DTO

### Why DTO?

* Used for request data
* Improves design
* Separates API layer and model layer

### Branch

```
UC3-add-dto-model-layer
```

---

# UC4 — Introduce Service Layer

### Objective

Move business logic to Service layer.

### Changes

* Created AddressBookService
* Added @Service annotation
* Used @Autowired in controller
* Controller calls Service
* Service manages List data

### Architecture

```
Controller → Service → Model
```

### Implemented in Service

* getAll()
* getById()
* add()
* update()
* delete()

### Branch

```
UC4-add-service-layer
```

---

## Current Status

| UC  | Description     | Status    |
| --- | --------------- | --------- |
| UC1 | Project setup   | Completed |
| UC2 | REST Controller | Completed |
| UC3 | DTO + Model     | Completed |
| UC4 | Service Layer   | Completed |

---
