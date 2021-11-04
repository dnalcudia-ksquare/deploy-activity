//import todo model
const Todo = require('../models/Todo');

//GET '/TODO'
const getAllTODO = (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    }
    return res.json(data);
  });
};

//POST /TODO
const newTODO = (req, res) => {
  const text = req.body.text;
  //check if the TODO name already exists in db
  Todo.findOne({ text: text }, (err, data) => {
    //if TODO not in db, add it
    if (!data) {
      //create a new TODO object using the Todo model and req.body
      const newTODO = new Todo({
        text: req.body.text,
      });

      // save this object to database
      newTODO.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
      //if there's an error or the TODO is in db, return a message
    } else {
      if (err)
        return res.json(`Something went wrong, please try again. ${err}`);
      return res.json({ message: 'Todo already exists.' });
    }
  });
};

//GET '/TODO/:id'
const getOneTODO = (req, res) => {
  const id = req.params.id; //get the TODO text
  //find the specific TODO with that text

  Todo.findById(id, (err, data) => {
    if (err || !data) {
      return res.json({ message: "Todo doesn't exist." });
    } else return res.json(data); //return the TODO object if found
  });
};

//PUT '/TODO/:id'
const updateTODO = (req, res) => {
  const id = req.params.id; // get the id of Todo to update
  const text = req.body.text; // get the text of Todo to update

  Todo.findByIdAndUpdate(id, { text: text }, { new: true }, (err, data) => {
    //if there's nothing to update return a message
    if (!data) return res.json({ message: "Todo doesn't exist." });
    //else if there's an error, return the err message
    else if (err)
      return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json(data);
  });
};

//DELETE '/TODO/:id'
const deleteOneTODO = (req, res) => {
  const id = req.params.id; // get the id of Todo to delete

  Todo.findByIdAndRemove(id, (err, data) => {
    //if there's nothing to update return a message
    if (!data) return res.json({ message: "Todo doesn't exist." });
    //else if there's an error, return the err message
    else if (err)
      return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({ message: 'Todo deleted.' });
  });
};

//export controller functions
module.exports = {
  getAllTODO,
  newTODO,
  getOneTODO,
  updateTODO,
  deleteOneTODO,
};
