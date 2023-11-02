
//Import Section
const mongomodel = require("../models/schema")

const request = async (req, res) => {
    try {
        if (!req.body.BookTitle || !req.body.Author || !req.body.publication_date || !req.body.Language || !req.body.Copies || !req.body.Location) {
            return res.status(400).send({ message: "All Mandatory Details are required" })
        }
        else {

            const newBook = {
                BookTitle: req.body.BookTitle,
                Author: req.body.Author,
                publication_date: req.body.publication_date,
                Language: req.body.Language,
                Copies: req.body.Copies,
                Location: req.body.Location
            }
            const Books = await mongomodel.create(newBook)
            return res.status(201).send(Books)
        }



    } catch (error) {
        console.log("Error Erupted" + error.message);
        return res.status(500).send({ status: error.message })
    }
}









//Export Section
module.exports = { request }







