module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get('db');
    db.get_all_posts()
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  updatePost: (req, res) => {
    let { caption } = req.body;
    let { id } = req.params;
    const db = req.app.get('db');
    db.update_post({ caption, id })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
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
