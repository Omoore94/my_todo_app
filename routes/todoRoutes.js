const express = require('express');
const router = express.Router();

const {
    getAllTodos, 
    createTodo, 
    deleteTodo, 
    getoneTodo, 
    updateTodo
} = require("../controller/todoController");

router.get("/get-todos", getAllTodos);
router.get("/:id", getoneTodo);
router.post("/create-todos", createTodo);
router.patch("/update-todos/:id", updateTodo);
router.delete("/delete-todos/:id", deleteTodo);

module.exports = router;


//NB: typically an local API/routing contains localhost, port number, default route and endpoints.