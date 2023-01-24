const userId = document.querySelectorAll(".user_id");
const userName = document.querySelectorAll(".user_name");
const createdOn = document.querySelectorAll(".created_on");
const ownerName = document.querySelectorAll(".owner");
const table = document.querySelector("#table")

fetch("/users")
    .then(data => data.json())
    .then(data => {
        data.forEach(user => {

            table.innerHTML += `
            <tr>
                <td class="user_id">${user.id}</td>
                <td class="user_name">${user.name}</td>
                <td class="created_on">${user.createdOn}</td>
                <td class="owner">${user.owner}</td>
                <td><span class="views">views</span></td>
            </tr>
            `;
        })
    })
    .then(res => {
        const views= document.querySelectorAll(".views")
        console.log(views);
        views.forEach((view, id) =>{
            view.addEventListener("click", (e)=>{
                window.location.href =`http://localhost:3001/accounts/${id+1}`;
            })
        })
    })