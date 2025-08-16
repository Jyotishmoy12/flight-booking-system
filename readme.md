## Airline Booking System  

- Implemented dedicated models for **cities**, **airports**, **flights**, and **airplanes** with comprehensive data validation.  
- Architected a scalable **two-microservice backend architecture**, strategically separating transactional booking logic from static flight data management.  
- Designed and enforced robust **relational database schemas** with foreign key constraints to ensure data integrity across all services through proper associations and comprehensive data validation.  
- Executed optimized **join operations** between flights, airports, and planes to deliver efficient JSON responses.  
- Built high-performance **search APIs** featuring dynamic filtering, sorting capabilities, and real-time airplane lookup functionality based on departure and arrival airport codes.  
- Implemented **ACID-compliant database transactions** with rollback mechanisms to secure booking operations and eliminate race conditions.  
- Implemented automated **cron jobs** to delete bookings that remain unconfirmed after 30 minutes, maintaining database hygiene.  
- Implemented **idempotent APIs** to prevent duplicate booking submissions and ensure request reliability.  
- Established comprehensive **error handling** with appropriate HTTP status codes and adherence to industry best practices.  


### MySQL Database for airplanes: 

<img width="1105" height="269" alt="image" src="https://github.com/user-attachments/assets/7d2543c5-fcef-4774-98be-b37993a6dbf2" />


### Airplanes API'S: 

````markdown
# Airplane API Documentation

Base URL: `/api/v1/airplanes`

---

## 1. Create Airplane

**Endpoint:**  
`POST /api/v1/airplanes`

**Purpose:**  
Create a new airplane entry.

**Request Payload:**  
```json
{
  "modelNumber": "airbus320",
  "capacity": 200
}
````

**Response (201 - Created):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "modelNumber": "airbus320",
    "capacity": 200,
    "createdAt": "2025-08-16T12:34:56.000Z",
    "updatedAt": "2025-08-16T12:34:56.000Z"
  },
  "error": {}
}
```

**Validation Error (400 - Bad Request):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 400,
    "explanation": "modelNumber and capacity are required"
  }
}
```

---

## 2. Get All Airplanes

**Endpoint:**
`GET /api/v1/airplanes`

**Purpose:**
Retrieve a list of all airplanes.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": [
    {
      "id": 1,
      "modelNumber": "airbus320",
      "capacity": 200
    },
    {
      "id": 2,
      "modelNumber": "boeing737",
      "capacity": 180
    }
  ],
  "error": {}
}
```

---

## 3. Get Airplane by ID

**Endpoint:**
`GET /api/v1/airplanes/:id`

**Purpose:**
Retrieve details of a single airplane by its ID.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "modelNumber": "airbus320",
    "capacity": 200
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airplane not found"
  }
}
```

---

## 4. Delete Airplane

**Endpoint:**
`DELETE /api/v1/airplanes/:id`

**Purpose:**
Delete an airplane by its ID.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "modelNumber": "airbus320",
    "capacity": 200
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airplane not found"
  }
}
```

---

## 5. Update Airplane

**Endpoint:**
`PATCH /api/v1/airplanes/:id`

**Purpose:**
Update details of an airplane by its ID.

**Request Payload (example):**

```json
{
  "capacity": 250
}
```

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "modelNumber": "airbus320",
    "capacity": 250,
    "updatedAt": "2025-08-16T12:40:00.000Z"
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airplane not found"
  }
}
```

---

## Notes

* All responses follow a **consistent structure**:

  ```json
  {
    "success": boolean,
    "message": string,
    "data": object | array | {},
    "error": object | {}
  }
  ```
* `AirplaneMiddlewares.validateCreateRequest` ensures `modelNumber` and `capacity` are provided for `POST`.

---

### MySQL Database for airports:

### Airports Api's:

<img width="1419" height="319" alt="image" src="https://github.com/user-attachments/assets/9b4c8f0f-28c2-4a92-9ff7-526d17378dcd" />

Perfect ✅ thanks for pasting the Airport routes + controller.
I see the payload now (`name`, `code`, `address`, `cityId`) and the structure is identical to airplanes (with `SuccessResponse` / `ErrorResponse`).

Here’s the **single Markdown file** you can copy directly into GitHub for **Airport APIs**:

````markdown
# Airport API Documentation

Base URL: `/api/v1/airports`

---

## 1. Create Airport

**Endpoint:**  
`POST /api/v1/airports`

**Purpose:**  
Create a new airport entry.

**Request Payload:**  
```json
{
  "name": "London",
  "code": "LHR",
  "address": "London Heathrow Airport",
  "cityId": 1
}
````

**Response (201 - Created):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "name": "London",
    "code": "LHR",
    "address": "London Heathrow Airport",
    "cityId": 1,
    "createdAt": "2025-08-16T12:34:56.000Z",
    "updatedAt": "2025-08-16T12:34:56.000Z"
  },
  "error": {}
}
```

**Validation Error (400 - Bad Request):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 400,
    "explanation": "name, code, address and cityId are required"
  }
}
```

---

## 2. Get All Airports

**Endpoint:**
`GET /api/v1/airports`

**Purpose:**
Retrieve a list of all airports.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": [
    {
      "id": 1,
      "name": "London",
      "code": "LHR",
      "address": "London Heathrow Airport",
      "cityId": 1
    },
    {
      "id": 2,
      "name": "New York",
      "code": "JFK",
      "address": "John F. Kennedy International Airport",
      "cityId": 2
    }
  ],
  "error": {}
}
```

---

## 3. Get Airport by ID

**Endpoint:**
`GET /api/v1/airports/:id`

**Purpose:**
Retrieve details of a single airport by its ID.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "name": "London",
    "code": "LHR",
    "address": "London Heathrow Airport",
    "cityId": 1
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airport not found"
  }
}
```

---

## 4. Delete Airport

**Endpoint:**
`DELETE /api/v1/airports/:id`

**Purpose:**
Delete an airport by its ID.

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "name": "London",
    "code": "LHR",
    "address": "London Heathrow Airport",
    "cityId": 1
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airport not found"
  }
}
```

---

## 5. Update Airport

**Endpoint:**
`PATCH /api/v1/airports/:id`

**Purpose:**
Update details of an airport by its ID.

**Request Payload (example):**

```json
{
  "address": "Updated Address, London"
}
```

**Response (200 - OK):**

```json
{
  "success": true,
  "message": "Successfully completed the request",
  "data": {
    "id": 1,
    "name": "London",
    "code": "LHR",
    "address": "Updated Address, London",
    "cityId": 1,
    "updatedAt": "2025-08-16T12:40:00.000Z"
  },
  "error": {}
}
```

**Response (404 - Not Found):**

```json
{
  "success": false,
  "message": "Something went wrong",
  "data": {},
  "error": {
    "statusCode": 404,
    "explanation": "Airport not found"
  }
}
```

---

## Notes

* All responses follow a **consistent structure**:

  ```json
  {
    "success": boolean,
    "message": string,
    "data": object | array | {},
    "error": object | {}
  }
  ```
* `AirportMiddlewares.validateCreateRequest` ensures `name`, `code`, `address`, and `cityId` are provided for `POST`.

---



