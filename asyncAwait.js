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

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      !error ? resolve() : reject("Oops! Someting went wrong");
    }, 2000);
  });
};

// async - await

const init = async () => {
  await createPost({ title: "post-3", body: "this is new post" });
  getPost();
};

init();

// async - await with fetch()

const getUsersWithAsync = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

// normal fetch and then

const getUsersWithThen = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getUsersWithAsync();
getUsersWithThen();
