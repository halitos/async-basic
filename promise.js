const posts = [
  { title: "Post-1", body: "This is post 1" },
  { title: "Post-2", body: "This is post 2" },
];

const getPost = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

//  *** This is how we create Promise,
//  *** usually we get promise returned in most cases

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      !error ? resolve() : reject("Oops! Someting went wrong");
    }, 2000);
  });
};

createPost({ title: "post-3", body: "this is new post" })
  .then(getPost)
  .catch((err) => console.log(err));
