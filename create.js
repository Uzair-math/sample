app.post("/", (req, res) => {
    const NewUser = {
        email: "uzair@gmail.com",
        password: "123"
    }
    User.create(NewUser)
    .then((user) => {
        console.log("Saved User :", user);
    })
    .catch((err) => {
        console.log(err);
    })
});
