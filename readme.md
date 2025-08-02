
---

## 📁 `src/` Directory Structure

The `src` folder contains all the core source code of the project. It **does not include any test files** — only the main application logic resides here.

Let’s take a look at the subfolders inside the `src/` directory:

---

### 📂 `config/`

This folder contains everything related to configuration or library setup.

* Example: Setting up `dotenv` in `server-config.js` to load environment variables across the project.
* Another example: Configuring a logging library to generate meaningful logs for debugging or monitoring.

---

### 📂 `routes/`

This folder defines all the **routes** of your application.

* It acts as the core of the application’s request-handling.
* You’ll define API endpoints, attach controllers, and apply middlewares here.

---

### 📂 `middlewares/`

Middlewares are functions that intercept incoming requests before they reach the final route handler.

* Common use cases: input **validators**, **authenticators**, **rate-limiters**, etc.

---

### 📂 `controllers/`

Controllers are the final middlewares before calling your business logic.

* They **receive the request**, **validate/process it**, and **delegate** the logic to the service layer.
* They do **not** directly interact with the database — only services do.

---

### 📂 `repositories/`

This folder handles **all database interactions**.

* You define raw SQL queries or ORM logic (e.g., Sequelize) here.
* This layer abstracts the database so your services can use clean, reusable functions.

---

### 📂 `services/`

This folder contains all the **business logic**.

* Services interact with **repositories** to fetch or update data.
* They handle the core workflows of the application.

---

### 📂 `utils/`

Contains **helper functions**, **custom error classes**, and other **utility methods** that can be reused throughout the codebase.

---

### 📂 `seeders/`

Used to **seed the database** with initial or test data.

* To run all seeders with Sequelize:

```bash
npx sequelize db:seed:all
```

---

## 🛠 Sequelize Setup

To initialize Sequelize in your project, navigate to the `src` folder and run:

```bash
npx sequelize init
```

This will generate:

* `config/config.json`
* `migrations/`
* `seeders/`
* `models/`

---

### 🔧 Configuring Environments

Update the `config/config.json` file to set the database credentials for each environment:

#### Example (Development):

```json
"development": {
  "username": "your_db_username",
  "password": "your_db_password",
  "database": "your_db_name",
  "host": "127.0.0.1",
  "dialect": "postgres"
}
```

Do the same for the `test` and `production` environments accordingly.

---

### 📦 Generating a Model

Use the following command to generate a model with Sequelize:

```bash
npx sequelize model:generate --name User --attributes name:string,email:string,password:string
```

This will create:

* A model file in `models/`
* A migration file in `migrations/`

---


