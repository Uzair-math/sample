app.post("/", (req, res) => {
    User.findByIdAndDelete({_id:'64a53ffe45f462c3862884a3'}, {password:"123"})
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    })
});