let url = new URL(window.location.href)
let urlID = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/posts/' + urlID)
    .then(res => res.json())
    .then(post => {
        let div = document.createElement('div');
        div.classList.add('divInfo')
        div.innerHTML = `<h2>userId:${post.userId}</h2><h2>id: ${post.id}</h2><h3>title: ${post.title}</h3><h3>body: ${post.body}</h3>`
        document.body.appendChild(div)
    })

fetch('https://jsonplaceholder.typicode.com/posts/' + urlID + '/comments')
    .then(res => res.json())
    .then(postCom => {
        setTimeout(() => {
            console.log(postCom);
            let divMain = document.createElement('div')
            divMain.classList.add('divMain')
            for (const divElement of postCom) {
                let div = document.createElement('div');
                div.innerHTML = `<h4>Comments: ${divElement.body}</h4>`
                div.classList.add('divCom')
                divMain.appendChild(div)
            }
            document.body.appendChild(divMain)
        }, 20)
    })