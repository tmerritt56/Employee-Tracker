const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const connection = require('./config/connection');
const mysql = require('mysql2');
const { application } = require('express');
const app = express ();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

