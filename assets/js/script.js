const inputRange = document.querySelector('#priceRange');
const inputCheck = document.querySelector('#checkPrice');
const priceText = document.querySelector('.price');
const pageNumber = document.querySelector('.page-number');
const timeYear = document.querySelector('.time');


let pageTotalsViews = ['10k', '50k', '100k', '500k', '1M'];
let perMonth = [8, 12, 16, 24, 36];
let checkedDiscount = false;

inputRange.addEventListener('input', () => {
  updatePrice(inputRange.value);
  pageNumber.innerHTML = pageTotalsViews[inputRange.value];


  inputRange.style.background = `linear-gradient(to right,
    hsl(174,77%,80%) 0%,
    hsl(174,77%,80%) ${inputRange.value * (100 / 4)}%,
    hsl(224,65%,95%) 0%,
    hsl(224,65%,95%) 100%)`
    ;
});

inputCheck.addEventListener('change', () => {
  if (checkedDiscount === false) {
    checkedDiscount = true;
  } else {
    checkedDiscount = false;
  }
  updatePrice()
});

function updatePrice() {
  if (checkedDiscount) {
    priceText.innerHTML = (perMonth[inputRange.value] * .75).toFixed(2);
  } else {
    priceText.innerHTML = perMonth[inputRange.value].toFixed(2);
  }
}