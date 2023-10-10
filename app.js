const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const questions = e.currentTarget.parentElement.parentElement;
        questions.classList.toggle("show-text")
    });
});








