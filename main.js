function fetchUserData() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('userList');

            // userList.innerHTML = '';

            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><img src="${user.avatar}" alt="Avatar" style="width: 50px; height: 50px;"></td>
                `;
                userList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}


document.addEventListener('DOMContentLoaded', fetchUserData);
// window.addEventListener('load', fetchUserData);