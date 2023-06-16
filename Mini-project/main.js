fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        let divMain = document.createElement('div')
        divMain.classList.add('divMain')
        for (const user of users) {
            // let divA =document.createElement()
            let div = document.createElement('a')
            div.classList.add('div')
            div.innerText = `${user.id} ${user.name}`
            div.href = 'user-details.html?id=' + user.id
            divMain.appendChild(div)
        }
        document.body.append(divMain)
    })