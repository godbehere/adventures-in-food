const createBlogPost = (postTitle, postDescription, imageURL) => {

    const newPost = document.createElement('article');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const bookmarkIcon = document.createElement('span');
    const favouriteIcon = document.createElement('span');
    const shareIcon = document.createElement('span');

    const image = document.createElement('img');

    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    rightDiv.id = "description";

    title.innerHTML = postTitle;
    description.innerHTML = postDescription;

    image.src = imageURL;

    bookmarkIcon.classList.add('icon');
    favouriteIcon.classList.add('icon');
    shareIcon.classList.add('icon');
    bookmarkIcon.classList.add('icon-bookmark');
    favouriteIcon.classList.add('icon-favourite');
    shareIcon.classList.add('icon-share');

    leftDiv.appendChild(image);
    rightDiv.appendChild(title);
    rightDiv.appendChild(description);

    newPost.appendChild(leftDiv)
    newPost.appendChild(rightDiv);
    newPost.appendChild(bookmarkIcon);
    newPost.appendChild(favouriteIcon);
    newPost.appendChild(shareIcon);

    newPost.classList.add("blog-post");
    newPost.classList.add("box");
    newPost.classList.add("clickable");
    newPost.classList.add("not-clicked");

    return { newPost, };

};

(function mainApp() {

    const main = document.querySelector('#newest-article');

    let newPost = createBlogPost("Dakgogi - Korean Fried Chicken",
                "Located near Yonge & Finch in North York - one of only two location in the GTA - My family and I were excited to "
                + "try this very popular Korean restaurant.",
                "https://i.imgur.com/zZiKoXb.jpg").newPost;

    main.appendChild(newPost);

    const clickables = document.querySelectorAll(".clickable");

    const bookmarks = document.querySelectorAll(".icon-bookmark");
    const favourites = document.querySelectorAll(".icon-favourite");

    console.log(bookmarks);

    bookmarks.forEach(element => {
        element.addEventListener("mousedown", (e) => {
                element.classList.toggle("icon-bookmark-filled");
                element.classList.toggle("icon-bookmark");
            // console.log("bookmark");
            // if (element.classList.contains("icon-bookmark")) {
            //     element.classList.add("icon-bookmark-filled");
            //     element.classList.remove("icon-bookmark");
            // } else {
            //     element.classList.remove("icon-bookmark-filled");
            //     element.classList.add("icon-bookmark");
            // }
            
        });
    });

    favourites.forEach(element => {
        element.addEventListener("mousedown", (e) => {
                element.classList.toggle("icon-favourite-filled");
                element.classList.toggle("icon-favourite");
            // console.log("favourite");
            // if (element.classList.contains("icon-favourite")) {
                // element.classList.add("icon-favourite-filled");
                // element.classList.remove("icon-favourite");
            // } else {
            //     element.classList.remove("icon-favourite-filled");
            //     element.classList.add("icon-favourite");
            // }
        });
    });

    clickables.forEach(element => {
        element.addEventListener("mousedown", (e) => {
            element.classList.add("clicked");
            element.classList.remove("not-clicked");
        });
    });

    document.addEventListener("mouseup", (e) => {
        clickables.forEach(element => {
            element.classList.remove("clicked");
            element.classList.add("not-clicked");
        });
    });

})();