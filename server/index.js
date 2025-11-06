import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://13.53.201.56:5174"
    ],
    methods:["GET","POST"],
    credentials:true
}))


app.get("/",(req,res) => {
    res.json({ message:"Hello from the root directory" })
})

app.get("/get-new", (req,res) => {

    const data = [
        { name:"bhargav", interest:["WEB","API","BACKEND","DEVOPS"] },
        { name:"chhayank", interest:["PYTHON","AI","AUTOMATION","ML"] },
        { name:"Aditya", interest:["NETWORKS","CYBER-SECURITY","INFORMATION-SECURITY"] },
        { name:"Raj", interest:["MOBILE-DEVELOPMENT","FLUTTER","DART"] },
        { name:"Arya", interest:["FLUTTER","DART","CROSS-PLATFORM DEVELOPMENT"] },
        { name:"Nayan", interest:["PHP","JS","MYSQL","WEB-DEVELOPMENT"] }
    ]

    res.json({ data,message:"Data Fetched Successfully" })
})

const PORT = 5000

app.listen(PORT, () => console.log(`Server is running on the http://localhost:${PORT}`))