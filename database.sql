CREATE DATABASE todo_project_db;

USE todo_project_db;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL
);

