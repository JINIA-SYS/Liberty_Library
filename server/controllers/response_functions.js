//Import Section
const mongomodel = require("../models/schema")

//Route-Response for Receiving all books data
const response_allBooks = async (req, res) => {
    // console.log(req);
    try {
        const books = await mongomodel.find({})
        return res.status(200).json({ count: books.length, books: books })
    } catch (error) {
        console.log("Error erupted with data" + error.message)
        return res.status(500).send({ status: error.message })
    }
}

//Route-Response for receiving books data by id
const response_Books_ID = async (req, res) => {
    try {
        const id = req.params.ID
        const books = await mongomodel.findById(id)
        if (!books) { return res.status(404).json({ message: "Book not found" }) }
        return res.status(200).json({ Book: books })

    } catch (error) {
        console.log("Book not available by that id" + error.message)
        return res.status(500).json({ status: error.message })
    }
}



//Route-Response for updating the Book
const response_Books_Update = async (req, res) => {
    try {
        if (!req.body.BookTitle || !req.body.Author || !req.body.publication_date || !req.body.Language || !req.body.Copies || !req.body.Location) {
            return res.status(404).json({ message: "All mandatory details are pending to be filled " })
        }
        const { ID } = req.params;
        const books = await mongomodel.findByIdAndUpdate(ID, req.body)
        if (!books) {
            return res.status(404).json({ message: "Book not available" })
        }
        return res.status(200).json({ data: books })
    } catch (error) {
        console.log("Books data not updated" + error.message)
        return res.status(500).json({ status: "Internal Server error" })
    }
}



//Route Response for Deleting the Book
const response_Books_Delete = async (req, res) => {
    try {
        const { ID } = req.params
        const books = await mongomodel.findByIdAndDelete(ID, req.body)
        if (!books) { return res.status(404).json({ message: "Book Details not found" }) }
        return res.status(200).json({ message: "Delete Successful" })

    } catch (error) {
        console.log("Error deleting Books data" + error.message)
        return res.status(404).json({ message: "Internal Server Error" })
    }

}


//Export Section
module.exports = { response_allBooks, response_Books_ID, response_Books_Update, response_Books_Delete }












