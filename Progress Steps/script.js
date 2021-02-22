const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const stepsCircles = document.querySelectorAll('.circle')

let currentActiveCircle =  1 ;

nextBtn.addEventListener('click', () => {
    if( currentActiveCircle < stepsCircles.length) {
        currentActiveCircle ++
        if(currentActiveCircle == stepsCircles.length) nextBtn.disabled = true ;
        prevBtn.disabled = false ;
    }
    console.log(currentActiveCircle);
    updateProgressStep();
});

prevBtn.addEventListener('click', () => {
    if( currentActiveCircle > 1) {
        currentActiveCircle --
        if(currentActiveCircle == 1) prevBtn.disabled = true ;
        nextBtn.disabled = false ;
    }
    console.log(currentActiveCircle);
    updateProgressStep();
});

function updateProgressStep(){
    stepsCircles.forEach((circle, index) => {
        if (index < currentActiveCircle){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    progress.style.width =( (currentActiveCircle-1) / (stepsCircles.length-1)) *100 + "%";
}