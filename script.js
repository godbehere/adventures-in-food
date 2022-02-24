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
    newPost.classList.add("box");
    newPost.classList.add("clickable");

    return { newPost, };

};

(function mainApp() {

    const main = document.querySelector('#newest-article');

    let newPost = createBlogPost("Dakgogi - Korean Fried Chicken",
                "Located near Yonge & Finch in North York - one of only two location in the GTA - My family and I were excited to "
                + "try this very popular Korean restaurant.",
                "https://i.imgur.com/zZiKoXb.jpg").newPost;

    main.appendChild(newPost);

    let clickables = document.querySelectorAll(".clickable");

    clickables.forEach(element => {
        element.addEventListener("mousedown", (e) => {
            element.classList.add("clicked");
        });
    });

    document.addEventListener("mouseup", (e) => {
        clickables.forEach(element => {
            element.classList.remove("clicked");
        });
    });

})();