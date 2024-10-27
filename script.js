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
// 