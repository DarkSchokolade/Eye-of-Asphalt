# Eye of Asphalt

This project is a sub part of [AVS-RFID_TEC](https://github.com/StealthAdder/AVS-RFID_TEC)

## How to run the project

- `npm install` from the root of project directory to install the dependency
- make a `.env` file in the root directory with each variable on a new line `NODE_ENV = development PORT = 5000 MONGO_URI = connection stiring of your MongoDB without quotes`
- `npm run data:import` to import/seed the sample data into your MongoDB
- _Finally_ `npm run dev` to run the whole project
