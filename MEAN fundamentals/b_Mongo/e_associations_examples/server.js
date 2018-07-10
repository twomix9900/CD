const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Posts must have a title"]
  },
  content: {
    type: String,
    required: [true, "Posts must have content"]
  },
}, { timestamps: true })

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Blogs must have a title"],
    minlength: [3, "Titles must have at least 3 characters"]
  },
  posts: [PostSchema]
}, { timestamps: true })

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "A first name is required"]
  },
  last_name: {
    type: String,
    required: [true, "A last name is required"]
  },
  blogs: [BlogSchema]
}, { timestamps: true })

const Blog = mongoose.Schema('Blog');
const User = mongoose.Schema('User');
// Now, we may create a new blog and push it into the user's blogs array. The code snippet below assumes the id of a user was passed through the url parameters and the blog information was passed as post data (that code is not shown).  Similarly, we may create new posts and push them into a blog's posts array.
Blog.create(req.body, function (err, data) {
  if (err) {
    // handle the error from creating a blog
  } else {
    User.findOneAndUpdate({
      _id: req.params.id
    }, {
      $push: {
        blogs: data
      }
    }, function (err, data) {
      if (err) {
        // handle the error from trying to update the user
      } else {
        // it worked! How shall we celebrate?
      }
    })
  }
})




// Eventually, this may be how one user's document looks
{  _id: ObjectId("5a753823645d421b8ec93b38"),
   first_name: "Beth",
   last_name: "Sanchez",
   created_at: ISODate("2018-02-03T04:18:56.841Z"),
   updated_at: ISODate("2018-02-03T04:18:56.841Z"),
   blogs: [ { _id : ObjectId("5a754273635d422b8ec93b3c"),
    title: "Programming challenges",
    created_at: ISODate("2018-03-03T04:16:56.841Z"),
    updated_at: ISODate("2018-02-03T04:18:56.841Z"),
    posts: [ { _id: ObjectId("5a753813645d421b8ec93b37"),
      title: "My first day with JavaScript",
      content: "Loving the es6 syntactic sugar!",
      created_at: ISODate("2018-03-03T04:16:56.841Z"),
      updated_at: ISODate("2018-02-03T04:18:56.841Z"),
    },
    { _id: ObjectId("5a753973645d421b8ec93b3a"),
      title: "My second day with JavaScript",
      content: "I changed my mind, es5 is still king.",
      created_at: ISODate("2018-03-05T02:16:56.841Z"),
      updated_at: ISODate("2018-03-05T02:18:56.841Z"),
    } ]
    },
    { _id: ObjectId("5a853933625d499b8fc93s3a"),
      title: "Cats and kittens",
      created_at: ISODate("2018-03-18T04:09:32.511Z"),
      updated_at: ISODate("2018-03-19T04:09:32.511Z"),
      posts: [ { _id: ObjectId("5a754474645n428b4rc73b3b"),
        title: "Everyone needs a cat",
        content: "They're purrfect.",
        created_at: ISODate("2018-04-03T04:16:56.841Z"),
        updated_at: ISODate("2018-04-03T04:18:56.841Z"),
        } ]
      } ]
}
