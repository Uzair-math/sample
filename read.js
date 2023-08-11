
app.post("/", (req, res) => {
    User.find()
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    })
});