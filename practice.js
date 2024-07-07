document.getElementById('dataLoadBtn').addEventListener('click', function(){
    const inputBox = document.getElementById('inputBox').value;
    const count = parseInt(inputBox);
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data = data.slice(0, count)
        const showData = document.getElementById('users');
        showData.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            const show = document.createElement('div');
            show.innerHTML = `
                <div class="className">
                <div id="user">
                <span>${user.user}</span>
                <span>${user.name}</span>
                </div>
                </div>
            `;
            showData.appendChild(show)
        }
    })
})