# EduLink – API & Project README

> This README consolidates setup, run instructions, and API documentation for the controllers you shared (Announcement, Attendance, ClassRoom, Locker, Student, TrashBin). It doubles as a reference for teammates and for onboarding.

---

## Table of Contents

* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Local Setup](#local-setup)
  * [Build & Run](#build--run)
* [Configuration](#configuration)
* [API Overview](#api-overview)

  * [Conventions](#conventions)
  * [Status Codes](#status-codes)
  * [Authentication](#authentication)
* [Endpoints](#endpoints)

  * [Announcements](#announcements)
  * [Attendance](#attendance)
  * [ClassRoom](#classroom)
  * [Locker](#locker)
  * [Student](#student)
  * [TrashBin](#trashbin)
* [OpenAPI / Swagger](#openapi--swagger)
* [cURL Examples](#curl-examples)
* [Error Handling & Validation](#error-handling--validation)
* [Notes & Recommendations](#notes--recommendations)

---

## Overview

EduLink is a Spring Boot–based backend exposing REST APIs for a campus management domain: announcements, attendance, classrooms, lockers, students, and trash bins.

**Base URL:** `http://localhost:8080` (adjust per environment)

All controllers use `@CrossOrigin`, enabling cross-origin requests from browser clients by default.

---

## Tech Stack

* Anguller (recommended)
* Node

---

## Getting Started

### Prerequisites

* JDK 17+
* Maven 3.9+ (or Gradle 8+)

### Local Setup

1. Clone the repository.
2. Ensure Lombok is configured in your IDE.
3. Configure environment variables (see [Configuration](#configuration)).

### Build & Run

```bash
# Maven
mvn clean spring-boot:run

# or Gradle
gradle bootRun
```

The app should be available at `http://localhost:8080`.

---

## Configuration

Typical Spring Boot properties live in `application.yml` or `application.properties`. Add database, logging, and CORS configs as needed. The code shown doesn’t include persistence configuration details—adjust to your setup.

---

## API Overview

### Conventions

* **Content Type:** `application/json` for request/response bodies unless noted.
* **IDs:** `Integer` path/query parameters depending on endpoint.
* **CORS:** Enabled on controllers.

### Status Codes

* `200 OK`: Successful read or textual confirmation.
* `201 Created`: *Recommended* for create endpoints (some current methods return `204`).
* `204 No Content`: Action succeeded with no body (current behavior for many `void` handlers).
* `400 Bad Request`: Invalid input or service-level validation failed.
* `501 Not Implemented`: Route mapped but not implemented (e.g., `trashBin/all` currently returns `null`).

### Authentication

No authentication is enforced in the provided code. Add Spring Security/JWT if needed.

---

## Endpoints

### Announcements

**Base Path:** `/announcement`

* **POST** `/add` — Add an announcement
  **Body:** `Announcement` (JSON)
  **Response:** `204 No Content`

* **GET** `/get-all` — List announcements
  **Response:** `200 OK` → `Announcement[]`

* **DELETE** `/delete?id={id}` — Delete by id
  **Response:** `204 No Content`

---

### Attendance

**Base Path:** `/attendance`

* **POST** `/mark` — Mark attendance
  **Body:** `Attendance`
  **Response:** `204 No Content`

* **GET** `/all` — List attendance
  **Response:** `200 OK` → `Attendance[]`

* **DELETE** `/delete?id={id}` — Delete by id
  **Response:** `204 No Content`

---

### ClassRoom

**Base Path:** `/classRoom`

* **POST** `/add` — Create classroom
  **Body:** `ClassRoom`
  **Response:** `200 OK` with `"Success"` on success; `400 Bad Request` with `"Error"` or exception message.

> **Note:** Other CRUD methods exist in the controller but lack request mappings and are not exposed.

---

### Locker

**Base Path:** `/locker`

* **GET** `/all` — List lockers
  **Response:** `200 OK` → `Locker[]`

* **POST** `/add` — Add or update locker
  **Body:** `Locker`
  **Response:** `204 No Content`

* **DELETE** `/delete?id={id}` — Delete locker
  **Response:** *Mapped but method body is TODO.*

* **PUT** `/set-status?id={id}&set={true|false}` — Set locker occupied/available
  **Response:** `204 No Content`

* **GET** `/get-status?id={id}` — Get locker status
  **Response:** `200 OK` → `true|false`

* **PUT** `/set-pen-status?id={id}&set={true|false}` — Set pen status
  **Response:** `204 No Content`

* **GET** `/get-pen-status?id={id}` — Get pen status
  **Response:** `200 OK` → `true|false`

---

### Student

**Base Path:** `/student`

* **POST** `/add` — Add student
  **Body:** `Student`
  **Response:** `204 No Content`

* **GET** `/all` — List students
  **Response:** `200 OK` → `Student[]`

* **GET** `/find` — Find by ID
  **Response:** `200 OK` → `Student`  

* **DELETE** `/delete?id={id}` — Delete student
  **Response:** `204 No Content`

---

### TrashBin

**Base Path:** `/trashBin`

* **POST** `/add` — Create trash bin
  **Body:** `TrashBin`
  **Response:** `200 OK` → `TrashBinEntity`

* **GET** `/all` — List trash bins
  **Response:** *Currently returns `null` — not implemented.*

* **PUT** `/set-Capacity?id={id}&capacity={int}` — Update capacity
  **Response:** `200 OK` ("capacity updated success") or `400 Bad Request` ("capacity update failed")

* **PUT** `/garbage-type?id={id}&garbageType={int}` — Set garbage type
  **Response:** `200 OK` ("garbage type updated success") or `400 Bad Request` ("garbage type update failed invalid id")

---

## OpenAPI / Swagger

An OpenAPI 3.0 spec can be generated or maintained manually. Suggested setup:

1. Add dependency (Maven):

```xml
<dependency>
  <groupId>org.springdoc</groupId>
  <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
  <version>2.5.0</version>
</dependency>
```

2. Run the app and open Swagger UI at: `http://localhost:8080/swagger-ui.html`
3. Optionally maintain a static `openapi.yaml` checked into the repo.

> If you want a ready-to-use `openapi.yaml`, see the earlier spec—paste it into `/docs/openapi.yaml` and point Swagger UI to it if desired.

---

## cURL Examples

### Announcements

```bash
curl -X POST http://localhost:8080/announcement/add \
  -H 'Content-Type: application/json' \
  -d '{"title":"Exam schedule","message":"Midterms start on Sept 10"}'

curl http://localhost:8080/announcement/get-all

curl -X DELETE 'http://localhost:8080/announcement/delete?id=12'
```

### Attendance

```bash
curl -X POST http://localhost:8080/attendance/mark \
  -H 'Content-Type: application/json' \
  -d '{"studentId":1001,"classId":23,"date":"2025-08-16","present":true}'

curl http://localhost:8080/attendance/all

curl -X DELETE 'http://localhost:8080/attendance/delete?id=501'
```

### ClassRoom

```bash
curl -X POST http://localhost:8080/classRoom/add \
  -H 'Content-Type: application/json' \
  -d '{"name":"Lab A","capacity":30,"building":"Main Block"}'
```

### Locker

```bash
curl http://localhost:8080/locker/all

curl -X POST http://localhost:8080/locker/add \
  -H 'Content-Type: application/json' \
  -d '{"label":"L-007","occupied":false,"penAvailable":true}'

curl -X PUT 'http://localhost:8080/locker/set-status?id=7&set=true'

curl 'http://localhost:8080/locker/get-status?id=7'

curl -X PUT 'http://localhost:8080/locker/set-pen-status?id=7&set=false'

curl 'http://localhost:8080/locker/get-pen-status?id=7'
```

### Student

```bash
curl -X POST http://localhost:8080/student/add \
  -H 'Content-Type: application/json' \
  -d '{"firstName":"Alex","lastName":"Perera","email":"alex@example.com","classRoomId":23}'

curl http://localhost:8080/student/all

curl -X DELETE 'http://localhost:8080/student/delete?id=1001'
```

### TrashBin

```bash
curl -X POST http://localhost:8080/trashBin/add \
  -H 'Content-Type: application/json' \
  -d '{"location":"Cafeteria North","capacity":60,"garbageType":1}'

curl -X PUT 'http://localhost:8080/trashBin/set-Capacity?id=3&capacity=80'

curl -X PUT 'http://localhost:8080/trashBin/garbage-type?id=3&garbageType=2'
```

---

## Error Handling & Validation

* Add bean validation to DTOs (e.g., `@NotNull`, `@Email`, `@Positive`).
* Use `@Valid` on `@RequestBody` parameters.
* Consider a global `@ControllerAdvice` with `@ExceptionHandler` to return structured error responses (Problem Details / RFC 9457).

---

## Notes & Recommendations

* Prefer `201 Created` with a `Location` header for create endpoints.
* For state-changing endpoints currently using query params (e.g., `set-status`), consider switching to `PUT /locker/{id}/status` with a JSON body.
* Document enums like `garbageType` (e.g., `0=General, 1=Plastic, 2=Paper`) in the schema.
* Add pagination for list endpoints if collections can grow large.
* Add authentication/authorization (e.g., Spring Security with JWT) before production use.
