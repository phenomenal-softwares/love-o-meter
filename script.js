var loader = document.getElementById('loader');
loader.style.display = "none";

const displayResult = document.querySelector('.start_btn');

displayResult.addEventListener('click', function (){
const userName = document.getElementById('userName').value.toLowerCase();
const personName = document.getElementById('personName').value.toLowerCase();
const relationship = document.getElementById('relationship').value.toLowerCase().replace("my", "");

if (userName == "" || personName == "" || relationship == "") {
    alert("PLEASE FILL OUT ALL INPUTS!")
  } else {
loader.style.display = "block";
const showUser = document.getElementById('userInput');
const showRel = document.getElementById('relInput');
const showPerson = document.getElementById('personInput');
const lovePercent = document.getElementById('lovePercent');
const loveComment = document.getElementById('loveComment');

  showUser.innerHTML = userName;
  showRel.innerHTML = relationship;
  showPerson.innerHTML = personName;
  
  if (relationship.match(/(brother|sister|cousin|niece|nephew|uncle|aunt|grand)/gi)) {
  lovePercent.innerHTML = Math.floor(Math.random() * 30 + 70) + "%";
  loveComment.innerHTML = "Your " + relationship + " really loves you. Strive to perfect the relationship. " + familyLove[Math.floor(Math.random() * familyLove.length)];
  } else if (relationship.match(/(pet|dog|cat|goat|parrot|animal)/gi)) {
  lovePercent.innerHTML = Math.floor(Math.random() * 30 + 70) + "%";
  loveComment.innerHTML = "Animals, especially pets, are capable of incredible loyalty and friendship!";
  } else if (relationship.match(/(girlfriend|boyfriend|date|babe|boo|bae|lover)/gi)) {
  lovePercent.innerHTML = Math.floor(Math.random() * 30 + 70) + "%";
  loveComment.innerHTML = "Your " + relationship + " loves you so much. Strive to perfect the love. " + spouseLove[Math.floor(Math.random() * spouseLove.length)];
  } else if (relationship.match(/(friend|bestie|ally|partner)/gi)) {
  lovePercent.innerHTML = Math.floor(Math.random() * 30 + 70) + "%";
  loveComment.innerHTML = "Your " + relationship + " loves you so much. Strive to level up the friendship by drawing closer to each other. " + friendLove[Math.floor(Math.random() * friendLove.length)];
  } else if (personName.match(/(god|bible|jesus|holy spirit|jesu|christ|jehova|yahweh|adonai|elohim|i am that i am|lily of the valley|almighty|yeshua)/gi)) {
lovePercent.innerHTML = "100%";
loveComment.innerHTML = godLove[Math.floor(Math.random() * godLove.length)]
  } else if (personName.match(/(satan|devil|demon|evil|hell|lucifer|darkness|fornication|sin)/gi)) {
lovePercent.innerHTML = "0%";
loveComment.innerHTML = "The devil and his cohorts do not love you at all. They want to destroy you. Flee!!";
  } else if (relationship.match(/(mother|mom|mommy|mum|mummy|mama)/gi)) {
 showRel.innerHTML = "mother";
 lovePercent.innerHTML = "99%";
 loveComment.innerHTML = momLove[Math.floor(Math.random() * momLove.length)];
  } else if (relationship.match(/(father|daddy|dad|baba|papa)/gi)) {
  showRel.innerHTML = "father";
  lovePercent.innerHTML = "99%";
  loveComment.innerHTML = dadLove[Math.floor(Math.random() * dadLove.length)]
  } else if (relationship.match(/(parent|child|son|daughter)/gi)) {
  lovePercent.innerHTML = "99%";
  loveComment.innerHTML = familyLove[Math.floor(Math.random() * familyLove.length)]
  } else if (relationship.match(/(wife|husband|spouse|significant other|fiance|fiancé|hubby|darling|sweetheart)/gi)) {
  lovePercent.innerHTML = "99%";
  loveComment.innerHTML = spouseLove[Math.floor(Math.random() * spouseLove.length)]
  } else if (relationship.match(/(self|myself|body)/gi)) {
  document.getElementById('selfLove').innerHTML = "you love yourself by";
  lovePercent.innerHTML = "100%";
  loveComment.innerHTML = "Nothing compares to self-love. We really need to love ourselves if we want to love others"
  }
  else {
  let loveResult = Math.floor(Math.random() * 100);
  lovePercent.innerHTML = loveResult + "%";
  if (loveResult < 50) {
  loveComment.innerHTML = "The love between you and your " + relationship + " is rather low. Please relate more with your " + relationship + " and sort things out!";
  } else {
  loveComment.innerHTML = "Keep up the love with your " + relationship + ". Strive to perfect the love!";
  }
  }
  setTimeout(showResult, 3000);
  }
})


function showResult() {
  document.getElementById('id01').style.display='block';
  loader.style.display = "none";
}
