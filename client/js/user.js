const userId = document.querySelector(".user_id");
const userName = document.querySelector(".user_name");
const owner = document.querySelector(".owner")
const createdOn = document.querySelector(".created_on")

const data = window.location.pathname
const id = data.charAt(data.length-1) 

 console.log(id);
fetch(`/userinfo/${id}`)
    .then(res => res.json())
    .then(user => {
        userId.textContent = user.id;
        userName.textContent = user.name;
        owner.textContent = user.owner;
        createdOn.textContent = user.createdOn;
      
    })
    