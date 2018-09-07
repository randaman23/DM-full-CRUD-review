module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get('db');
    const {userid } = req.query
    console.log(req.query)

    console.log(req.query)
    if(userid){
      db.get_posts_by_userid({id: userid})
      .then(posts => {res.status(200).send(posts)})
    } else{
      db.get_all_posts()
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
    }
  },
  updatePost: (req, res) => {
    let { caption ,user_id} = req.body;
    let { id } = req.params;
    console.log('session',req.session)
    console.log('body',req.body)
    const db = req.app.get('db');

    if(user_id === req.session.user_id)
    {db.update_post({ caption, id })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
    }else{
      console.log('not yours')
      res.status(500).send('not yours')
    }
    
  },
  addPost: (req, res) => {
    let { image, caption } = req.body;
    const db = req.app.get('db');
    db.add_post({ image, caption })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  deletePost: (req, res) => {
    const db = req.app.get('db');
    let { id } = req.params;
    db.delete_post({ id })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
};
