
document.getElementById('dataLoadBtn').addEventListener('click', function(){
    const inputBox = document.getElementById('inputBox').value;
    const count = parseInt(inputBox);
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        // This line for how many data we want to show
        data = data.slice(0, count)
        const showUsers = document.getElementById('users')
        showUsers.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const mainData = data[i];
            const show = document.createElement('h2');
            show.innerHTML = `
            <div class="flex">
                <div id="user"><h2>${mainData.name}</h2>
                <p>${mainData.user}</p>
                <p>${mainData.address}</p>
                <button onclick="deleteFun(${mainData.id})" class="deleteBtn">Delete ${mainData.id}</button>
                </div>
            </div>
                `;
            showUsers.appendChild(show);
        } 
        // if(data <= 8){
        //     return data;
        // }
        // else{
        //     return "someting Wrong"
        // }
    })
})


// Adding a Delete Button 
const deleteFun = (btn) => {
    const data = document.getElementById(btn);
    data.style.display = 'none';
}





// const dataLoadBtn = (btn) => {
//     fetch(`data.json${btn}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// }


// This is for disable right click
