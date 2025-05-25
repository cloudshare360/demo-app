import express from "express";

const app = express();
const port = 3000 |

app.use(bodyParser.json)

let users = [
    {id:1, name:"srinivas"},
    {id:2, name: "radha"}
]


console.log(1+2)
console.log(1+2)

setTimeout(()=> {
    console.log("Hello")
}, 500);

app.get("/user", (req, res)  => {
    res.json(users);
});

app.listen(port, () => {
    console.log("The Server Started");
}
)




