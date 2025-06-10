import express from "express";

const app = express();

export default app;

import employees from "./db/employees.js";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.send(randomEmployee);
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id == id);
  console.log(employees[id]);

  if (!employee) {
    return res
      .status(404)
      .send({ message: `Employee with id ${id} not found` });
  }

  res.send(employee);
  console.log(id);
});
