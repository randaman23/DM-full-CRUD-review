// NoDB -- using global variable to store data

let posts = [
  {
    id: 0,
    image: 'https://thewondrous.com/wp-content/uploads/2015/04/pics-of-funny-monkeys.jpg',
    caption: 'OMG',
  },
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/16/d7/9f/16d79f042402b6d6b9479070e92eba0d.jpg',
    caption: 'look at this cute penguin',
  },
  {
    id: 2,
    image: 'https://wallpapercave.com/wp/N1fiHxK.jpg',
    caption: 'check out this adorable puppy',
  },
];
let id = 1;

module.exports = {
  getPosts: (req, res) => {
    console.log('getting');
    res.status(200).send(posts);
  },
  updatePost: (req, res) => {
    const { caption } = req.body;

    console.log(typeof req.params.id);
    const index = posts.findIndex(post => post.id === +req.params.id);
    console.log(index);
    posts[index].caption = caption;
    res.status(200).send(posts);
  },
  addPost: (req, res) => {
    req.body.id = id;
    posts.unshift(req.body);
    id++;
    res.status(200).send(posts);
  },
  deletePost: (req, res) => {
    const index = posts.findIndex(post => post.id === +req.params.id);
    posts.splice(index, 1);
    res.status(200).send(posts);
  },
};
