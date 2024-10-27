const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const randomNumber = getRandomInt(100)
console.log(randomNumber)
const successAlert = document.querySelector('.alert-success')
const dangerAlert = document.querySelector('.alert-danger')
document.querySelector('#numberInput').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        const usersNumber = parseInt(e.target.value)
        successAlert.classList.add('d-none')
        dangerAlert.classList.add('d-none')

        if (randomNumber === usersNumber) {
            successAlert.classList.remove('d-none')
            successAlert.textContent = "Ура! Победа!"
        } else {
            dangerAlert.classList.remove('d-none')
            dangerAlert.textContent = randomNumber > usersNumber 
                ? "Наше число больше" 
                : "Наше число меньше"
        }
        e.target.value = ''
    }
})


//гит - система контроля версий
//гитхаб, гитлаб - сайты или ресурсы с репозиториями
//репозиторий - отдельный проект со своим кодом и файлами, бывают публичные и приватные
// commit - изменение одного или неск файлов с комментарием
// 
// команды git :
// git init - инициализация гита
// git checkout new-branch - переключение на ветку new-branch 
// git checkout -b new-branch - создание ветки new-branch и переключение на ветку new-branch 
// git pull - стянуть изменения 
// git clone *адрес репозитория* . - клонирование репозитория в текущую папку
// git add - добавить файл в коммит
// git commit -m "сообщение" - сделать коммит с предварительно добавленными в коммит файлами
// git commit -am "сообщение" - сделать коммит со всеми измененными файлами 
// git merge branch-name - смерджить ветку branch-name в текущую ветку 