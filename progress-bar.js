const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

const CampaignType = document.getElementById('CampaignType');

const CampaignDetails = document.getElementById('CampaignDetails');

const CampaignExtras = document.getElementById('CampaignExtras');
const ClientDetails = document.getElementById('ClientDetails');
const MediaBudget = document.getElementById('MediaBudget');

// Campaign Details
const businessName = document.getElementById('businessName');
const eventDetails = document.getElementById('eventDetails');
const keyMessage = document.getElementById('keyMessage');
const eventStart = document.getElementById('eventStart');
const eventEnd = document.getElementById('eventEnd');

//Client Details
const clientName = document.getElementById('clientName');
const clientEmail = document.getElementById('clientEmail');
const clientNumber = document.getElementById('clientNumber');

let campaigntype = false;
let currentActive = 1;

nextBtn.addEventListener('click', () => {
  //   CampaignDetails.style.display = 'none';
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateCircle();
  if (currentActive === 2) checkCampaignDetails();
  if (currentActive === 4) checkClientDetails();
  if (currentActive === 5) selectedBudget(false);
  updateDisplay(currentActive);
});
prevBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateCircle();

  updateDisplay(currentActive);
});
function updateDisplay(currentActive) {
  console.log(currentActive);
  if (currentActive === 1) {
    CampaignType.style.display = 'block';
    CampaignDetails.style.display = 'none';
    CampaignExtras.style.display = 'none';
    ClientDetails.style.display = 'none';
    MediaBudget.style.display = 'none';
  } else if (currentActive === 2) {
    CampaignType.style.display = 'none';
    CampaignDetails.style.display = 'block';
    CampaignExtras.style.display = 'none';
    ClientDetails.style.display = 'none';
    MediaBudget.style.display = 'none';
  } else if (currentActive === 3) {
    CampaignType.style.display = 'none';
    CampaignDetails.style.display = 'none';
    CampaignExtras.style.display = 'block';
    ClientDetails.style.display = 'none';
    MediaBudget.style.display = 'none';
  } else if (currentActive === 4) {
    CampaignType.style.display = 'none';
    CampaignDetails.style.display = 'none';
    CampaignExtras.style.display = 'none';
    ClientDetails.style.display = 'block';
    MediaBudget.style.display = 'none';
  } else if (currentActive === 5) {
    CampaignType.style.display = 'none';
    CampaignDetails.style.display = 'none';
    CampaignExtras.style.display = 'none';
    ClientDetails.style.display = 'none';
    MediaBudget.style.display = 'block';
  }
}
function updateCircle() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('z-active');
    } else {
      circle.classList.remove('z-active');
    }
  });
  const actives = document.querySelectorAll('.z-active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

function selectedCampaignType() {
  nextBtn.disabled = false;
}
function selectedBudget(a) {
  if (a === false) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function checkCampaignDetails() {
  //   if (
  //     businessName.value != '' &&
  //     eventDetails.value != '' &&
  //     keyMessage.value != '' &&
  //     eventStart.value != '' &&
  //     eventEnd.value != ''
  //   ) {
  //     nextBtn.disabled = false;
  //   } else {
  //     nextBtn.disabled = true;
  //   }
}

function checkClientDetails() {
  //   if (
  //     clientName.value != '' &&
  //     clientEmail.value != '' &&
  //     clientNumber.value != ''
  //   ) {
  //     if (
  //       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(clientEmail.value)
  //     ) {
  //       nextBtn.disabled = false;
  //     }
  //   } else {
  //     nextBtn.disabled = true;
  //   }
}

function selectedCustomBudget() {
  const customAmount = document.getElementById('customAmountInput');
  if (customAmount.value >= 500) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
    console.log(customAmount.value);
  }
}
