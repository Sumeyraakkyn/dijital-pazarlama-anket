const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.quastion-form');
const result = document.querySelector('.result');
const percentageContainer = document.querySelector('.percentage-container');
const percentageImages = {
  25: document.querySelector('.percentage-image-25'),
  50: document.querySelector('.percentage-image-50'),
  75: document.querySelector('.percentage-image-75'),
  100: document.querySelector('.percentage-image-100')
};

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // Tüm resimleri gizle
    Object.values(percentageImages).forEach(img => img.style.display = 'none');

    // Sonucu göster
    result.classList.remove('d-none');
    percentageContainer.style.display = 'block';
    
    let puan = 0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;

        if(puan === score) {
            clearInterval(bastir);
            // Yüzdeye göre doğru resmi göster
            if(score <= 25) {
                percentageImages[25].style.display = 'block';
            } else if(score <= 50) {
                percentageImages[50].style.display = 'block';
            } else if(score <= 75) {
                percentageImages[75].style.display = 'block';
            } else {
                percentageImages[100].style.display = 'block';
            }
        } else {
            puan++;
        }
    }, 10);
});
