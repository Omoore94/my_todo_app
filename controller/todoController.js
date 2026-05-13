const TodoModel = require('../model/todoModel');


//crud operations
//get all
const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res
            .status(200)
            .json({ message: "All pending todos", data :todos})
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error getting all the todos", error: error.message});
    }
};

//get one
const getoneTodo = async (req, res) => {
    try {
        const { id } = req.params; //the params is parameter used to query a request
        const todo = await TodoModel.findById(id);
        return res
            .status(200)
            .json({message: "Todo found", data: todo})
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error getting one todo", error: error.message});
    }
};

//create a new to do
const createTodo = async (req, res) => {
    try {
        const {title, details } = req.body; //the body of a request contains information you are sending to the db from the client side
        const todo = await TodoModel.create({ title, details});
        return res
            .status(201)
            .json({ message: "Successfully created a new to do", data: todo })
    } catch (error) {
        return res
            .status(500)
            .json( {message: "Encountered an error creating new to do", error: error.message})
    }
};


//update to do
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findByIdAndUpdate(
            id,
            { completed: true}, 
            { new: true }
        );
        return res
            .status(200)
            .json({ message: "Successfully updated to do", data: todo})
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error encountered during todo update", error: error.message})
    }
};

//delete a to do
const deleteTodo = async (req, res) => {
try {
    const { id } = req.params;
    await TodoModel.findByIdAndDelete(id);
    return res
        .status(200)
        .json({ message: "Successfully deleted to do", data: todo})
} catch (error) {
    return res
        .status(500)
        .json({ message: "Error deleting todo", error: error.message})
}
};

//exporting all functions. 
module.exports = {
    getAllTodos,
    getoneTodo,
    createTodo,
    deleteTodo, 
    updateTodo
};
