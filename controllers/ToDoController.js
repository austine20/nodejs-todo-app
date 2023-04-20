const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.createToDo = async (req, res) => {
  const { text } = req.body;

  await ToDoModel.create({ text })
    .then((data) => {
      console.log("todo added successfully!!!"),
        console.log(data),
        res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = async (req, res) => {
  const { id, text } = req.body;
  await ToDoModel.findByIdAndUpdate(id, { text })
    .then(() => {
      console.log("Updated successfully!!!");
      res.send("Updated sucessfully!!!");
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.body;

  await ToDoModel.findByIdAndDelete(id)
    .then(() => {
      console.log("deleted successfully!!!");
      res.send("deleted sucessfully!!!");
      res.statusCode()
    })
    .catch((err) => console.log(err));
};
