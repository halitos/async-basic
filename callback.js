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

// getPost();

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "post-3", body: "this is new post" }, getPost);
