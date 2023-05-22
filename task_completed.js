const checkbox = document.querySelectorAll('.todo-completed')

checkbox.forEach(
    function (node, index) {
        node.addEventListener('input', (e) => {
            const animatable = e.target.parentElement.previousSibling.previousSibling
            const todo = e.target.parentElement.parentElement
            animatable.style.setProperty("top", (getComputedStyle(todo).getPropertyValue("height") / 2).toString())
            if (e.target.checked) {
                animatable.classList.remove("not-completed")
                setTimeout(function () {
                    animatable.classList.add("completed")
                }, 1)
                setTimeout(function () {
                    todo.classList.add("completed")
                }, 750)
                setTimeout(function () {
                    animatable.classList.remove("completed")
                }, 1001)
            } else {
                animatable.classList.remove("completed")
                setTimeout(function () {
                    animatable.classList.add("not-completed")
                }, 1)
                setTimeout(function () {
                    todo.classList.remove("completed")
                }, 750)
                setTimeout(function () {
                    animatable.classList.remove("not-completed")
                }, 1001)
            }
        })
    }
)