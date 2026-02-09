
// encontrar o botão adicionar tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})