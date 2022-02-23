const createBlogPost = (postTitle, postDescription, imageURL) => {

    const newPost = document.createElement('article');
    const title = document.createElement('h2');
    const description = document.createElement('p');

    const image = document.createElement('img');

    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    title.innerHTML = postTitle;
    description.innerHTML = postDescription;

    image.src = imageURL;

    leftDiv.appendChild(image);
    rightDiv.appendChild(title);
    rightDiv.appendChild(description);

    newPost.appendChild(leftDiv)
    newPost.appendChild(rightDiv);

    newPost.classList.add("blog-post");

    return { newPost, };

};

(function mainApp() {

    const main = document.querySelector('#main');

    let newPost = createBlogPost("TestTitle","This is my first post","https://i.imgur.com/OfXA2oT.jpg").newPost;

    main.appendChild(newPost);

})();