document.addEventListener('DOMContentLoaded', function() {
    const nameFetch = document.querySelector('#name');
    const usernameFetch = document.querySelector('#username');
    const avatarFetch = document.querySelector('#avatar');
    const reposFetch = document.querySelector('#repos');
    const followersFetch = document.querySelector('#followers');
    const followingFetch = document.querySelector('#following');
    const linkFetch = document.querySelector('#link');

    fetch('https://api.github.com/users/rodriguesraph').then(function(res) {
        return res.json();
    })
    .catch(function(erro) {
        alert("Ocorreu um erro na requisição da URL.")
    })
    .then(function(json) {
        nameFetch.innerText = json.name;
        usernameFetch.innerText = json.login;
        avatarFetch.src = json.avatar_url;
        followersFetch.innerText = json.followers;
        followingFetch.innerText = json.following;
        reposFetch.innerText = json.public_repos;
        linkFetch.href = json.html_url;
    })
})