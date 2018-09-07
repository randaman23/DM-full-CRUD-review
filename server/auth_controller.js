module.exports = {
  login: (req, res) => {
    console.log(req.session)
    const db = req.app.get('db')
    db.check_login(req.body).then(response => {
      if(response.length){
        req.session.userid = response[0].user_id
        res.status(200).send(response[0])
      } else{
        res.status(500).send('user not found')
      }
    })
  },
  register: (req, res) => {
    res.status(200).send('hi');
  },
};
