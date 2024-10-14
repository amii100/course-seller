
let data = [
    {
        courseName: "NodeJs",
        author: "Sahil",
        price: 38000
    },
    {
        courseName: "Web3",
        author: "Amitesh",
        price: 54000
    },
    {
        courseName: "IAS",
        author: "Saman",
        price: 73000
    },
    {
        courseName: "Angular",
        author: "Nidhi",
        price: 82000
    }
]

const getAllCourses = (req, res) => {
    res.status(200).json(data);
}


module.exports = {
    getAllCourses
}