const thanks = document.querySelector('.thanks');
const rating = document.querySelector('.rating');
const scoreBtn = document.querySelectorAll('.rating__list__score');
const submitBtn = document.querySelector('.rating__submit');
const scoreDisplay = document.querySelector('.thanks__rating__container');

let score = null;
thanks.style = "display:none"

for(let i = 0; i < scoreBtn.length; i++){
  scoreBtn[i].onclick = () => {
    
    for(let j = 0; j < scoreBtn.length; j++){
      scoreBtn[j].classList.remove('rating__list__score--selected');
    }

    scoreBtn[i].classList.add('rating__list__score--selected');
    
    score = i+1;
  };
}

submitBtn.onclick = () => {
  if(score !== null){
    thanks.style = "display:flex"
    rating.style = "display:none"
  
    scoreDisplay.append('You selected ' +score+ ' out of 5');
  }
};