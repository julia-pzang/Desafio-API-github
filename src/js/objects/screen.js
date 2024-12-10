const screen = {
    userProfile: document.querySelector(".profile-data"),
    
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}"alt="Foto do perfil do usuário" />
                <div class="data"> 
                    <h1>${user.name ?? "Não possui nome cadastrado 😔"}</h1>
                     <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                     <p>💟 Seguidores: ${user.followers}</p>
                     <p>✔️ Seguindo: ${user.following}</p>
                </div>
            </div>`

    if (user.repositories.length > 0) {
        let repositoriesItens = "";

        user.repositories.forEach(repo => repositoriesItens += 
            `<div class="repos">
                <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                <div class="painel">
                    <p>🍴 ${repo.forks_count} | </p>
                    <p>⭐ ${repo.stargazers_count} | </p>
                    <p>👀 ${repo.watchers_count} | </p>
                    <p>👩‍💻 ${repo.language ?? 'Sem Linguagem'}</p>
                </div>
            </div>`
        )

        this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
    }    
            
    if (user.events.length > 0) {
        let itensDosEvents = ""

        user.events.forEach(element => {
            if(element.type === "PushEvent") {
                itensDosEvents += 
                `<li>
                    <h3 class="nome-evento">${element.repo.name}</h3>
                    <p> -- ${element.payload.commits[0].message}</p>
                </li>`
            } else {
                itensDosEvents += 
                `<li>
                    <h3 class="nome-evento">${element.repo.name}</h3>
                    <p> -- Criado um ${element.payload.ref_type}</p>
                </li>`
            }
        });

        this.userProfile.innerHTML +=
            `<div class="eventos">
                <h2>Eventos</h2>
                <p>${itensDosEvents}</p>
            </div>`
        }
    },
    
    renderNotFound() {
        `<div class="eventos">
                    <h2>Eventos</h2>
                    <p>${itensDosEvents}</p>
                </div>`
    }
}

export { screen }