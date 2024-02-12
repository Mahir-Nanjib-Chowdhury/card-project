/* <div class="posts">
         <div class="post">
            <h4>Post Title 1 </h4>
           
            <p class="post-body">Post description</p>
         </div>
     </div> */

// dummy data
     let posts = [
         {
             title: "Post Title 1",
             body: "this is post 1"
         },
         {
            title: "Post Title 2",
            body: "this is post 2"
        },
        {
            title: "Post Title 3",
            body: "this is post 3"
        },
        {
            title: "Post Title 4",
            body: "Post description 4"
        },
        {
            title: "Post Title 5",
            body: "this is post 5"
        },
        {
            title: "Post Title 6",
            body: "this is post 6"
        },
        {
            title: "Post Title 7",
            body: "Post description 7"
        },
        {
            title: "Post Title 8",
            body: "this is post 8"
        },

     ]
      
    //  selection

     let postsElements = document.querySelector(".posts");
     function dataMapping(data) {
        data.forEach(post => {
            // Create elements
            let postElement = document.createElement("div");
            let titleElement = document.createElement("h2");
            let bodyElement = document.createElement("p");
    
            // Set content
            titleElement.textContent = post.title;
            bodyElement.textContent = post.body;
    
            // Append elements to the post element
            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);
    
            // Add classes if needed
            postElement.classList.add("post");
    
            // Append post element to the container
            postsElements.appendChild(postElement);
        });
    }
    
    dataMapping(posts);
     
