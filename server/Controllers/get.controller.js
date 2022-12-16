

//controllers;
const getController = (req, res)=>{
    res.status(200).json({
        message:'Server is running'
    })
}


//exporting the controllers;

module.exports = {
    getController,
}