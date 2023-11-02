
//Import Section
const mongodb = require("mongoose")



const mongodbconnect = async (url) => {
    return mongodb
        .set({ strictQuery: true })
        .connect(url)
        .then(() => { console.log(`MONGODB connection Done at url:${url}`) })
        .catch((error) => { console.log("Please check the url,Connection Failure" + error) })

}





//Export Section
module.exports = { mongodbconnect }