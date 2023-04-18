// кнопки переключения
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// контейнер
const container = document.querySelector('.container');
// левый блок с фоном и текстом
const sidebar = document.querySelector('.sidebar');
// правый блок картинками
const mainSlide = document.querySelector('.main-slide');
// для количества слайдов с фотографиями находим все контейнеры
const slidesCount = mainSlide.querySelectorAll('div').length;

// смещение сайдбара так чтобы совпадало с фотографией
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

// значение какой сейчас слайд активен
let activeSlideIndex = 0;

// слушатели нажатий на копки
upButton.addEventListener('click', () => {
  changeSlide('up');
});

downButton.addEventListener('click', () => {
  changeSlide('down');
});

// переключение слайдов в зависимости от направления
function changeSlide(direction) {
  // если нажали вверх
  if (direction === 'up') {
    activeSlideIndex++;
    // чтобы е выйти за рамки количества слайдов - обнуляем индекс активного слайда
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  // если нажали вниз
  } else if (direction === 'down') {
    activeSlideIndex--;
    // если зашли в приложение и сразу нажил вниз, а activeSlideIndex = -1 не может быть
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  // высчитываем высоту контейнера
  const height = container.clientHeight;

  // смещение правой и левой частей
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}