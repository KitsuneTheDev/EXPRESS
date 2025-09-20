const output = document.querySelector('#output');
const getButton = document.querySelector('#get-posts-btn');
const addPostForm = document.querySelector('#add-post-form');

// Get and show posts
async function showPosts() {
    console.log('Fetching posts...');
    try {
        const res = await fetch('http://localhost:8000/api/posts');
        if(!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } catch(error) {
        console.error(error);
    }
}

// Submit new post
async function addPost(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({title}),
        });

        if(!res.ok) {
            throw new Error(`Failed to add post.`);
        }
        const data = await res.json();
        const postEl = document.createElement('div');
        postEl.textContent = data.title;
        output.appendChild(postEl);
        showPosts();
    } catch(error) {
        console.error(error);
    }
}

// Event listeners
getButton.addEventListener('click', showPosts);
addPostForm.addEventListener('submit', addPost);