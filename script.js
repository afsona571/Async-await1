async function usersAsync() {
    try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];

        const profile = document.querySelector(".profile-pic");
        const info = document.querySelectorAll(".content-p"); 

        profile.src = user.picture.large;
        document.querySelector(".content h2").textContent = `${user.name.first} ${user.name.last}`;

        info[0].innerHTML = `<p><strong>Phone:</strong> ${user.phone}</p>`;
        info[1].innerHTML = `<p><strong>Manzil:</strong> ${user.location.city}, ${user.location.country}</p>`;
        info[2].innerHTML = `<p><strong>Yosh:</strong> ${user.dob.age}</p>`;
        info[3].innerHTML = `<p><strong>Email:</strong> ${user.email}</p>`;

    } catch (error) {
        console.error("Ошибка загрузки пользователя:", error);
    }
}
document.querySelector(".btn").addEventListener("click", async () => {
    const btn = document.querySelector(".btn");
    btn.disabled = true;
    
    await usersAsync(); 

    setTimeout(() => {
        btn.disabled = false; 
    }, 10);
});
