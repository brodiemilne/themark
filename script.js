// ========== OPEN / CLOSE OVERLAY FORM ==========
function openOrderForm() {
  document.getElementById('orderOverlay').style.display = 'flex';
}
function closeOrderForm() {
  document.getElementById('orderOverlay').style.display = 'none';
}

// ========== MULTI-STEP FORM LOGIC ==========
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(direction) {
  formSteps[currentStep].classList.remove("active");
  if(direction === "next") {
    currentStep++;
  } else if(direction === "prev") {
    currentStep--;
  }
  formSteps[currentStep].classList.add("active");
}

// Initialize first step as active
formSteps[currentStep].classList.add("active");
