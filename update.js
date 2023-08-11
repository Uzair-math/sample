

app.post("/", (req, res) => {
    User.findOneAndUpdate({_id:'64a53ffe45f462c3862884a3'}, {email:"ali@gmail.com"})
.then((user) => {
    console.log(user);
})
.catch((err) => {
    console.log(err);
})
});

