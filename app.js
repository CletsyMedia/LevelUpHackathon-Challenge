// MainBox
const boxCollapse = document.querySelector(".boxCollapse");
const mainBox = document.querySelector(".mainBox");
const plan = document.querySelector(".plan");
plan.onclick=()=>{
  mainBox.style.display = "none";
  boxCollapse.style.marginTop = "2rem";
};
// Intro toggle
const introSvg = document.querySelector(".intro svg");

introSvg.addEventListener("click", (e) => {
  e.stopPropagation();
  const collapseBox = introSvg.closest(".collapse");

  introSvg.classList.toggle("rotate-up");
  collapseBox.classList.toggle("collapse-active");

  // Select the specific accordion element
  const accordion = accordTitle.closest(".accordion");
  accordion.style.transition = "background-color 0.3s ease-in-out"; // Adjust the transition duration here
  accordion.style.backgroundColor = accordTitle.classList.contains("accord-active") ? "#E3E3E3" : "transparent";
});

// Accordion selector
const accordSelectors = document.querySelectorAll(".accord-title-head svg");

accordSelectors.forEach((svg) => {
  svg.addEventListener("click", (event) => {
    event.stopPropagation();
    const accordTitle = svg.closest(".accord-title");

    // Close all other accordions
    document.querySelectorAll(".accord-title").forEach((otherAccord) => {
      if (otherAccord !== accordTitle) {
        otherAccord.classList.remove("accord-active");
        otherAccord.style.transition = "background-color 0.3s ease-in-out"; // Adjust the transition duration here
        otherAccord.style.backgroundColor = "transparent";
      }
    });

    accordTitle.classList.toggle("accord-active");

    // Set background color and border radius only for the active accordion title
    const isActive = accordTitle.classList.contains("accord-active");
    accordTitle.style.transition = "background-color 0.3s ease-in-out"; // Adjust the transition duration here
    accordTitle.style.backgroundColor = isActive ? "#E3E3E3" : "transparent";
    accordTitle.style.borderRadius = isActive ? "8px" : "0";
  });
});

function toggleCheckbox(checkbox) {
  const defaultSvg = checkbox.parentNode.querySelector('#defaultSvg');
  const toggledSvg = checkbox.parentNode.querySelector('#toggledSvg');
  
  if (checkbox.checked) {
    defaultSvg.style.display = 'none';
    toggledSvg.style.display = 'block';
  } else {
    defaultSvg.style.display = 'block';
    toggledSvg.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // Get the necessary elements
  const progIndicator = document.getElementById('prog-indicator');
  const countElement = document.querySelector('.count');
  const checkboxes = document.querySelectorAll('.accord-title-head .custom-checkbox-input');

  let completedCounter = 0;

  // Function to update counter and progress bar
  const updateCounterAndProgressBar = () => {
      const percentage = (completedCounter / checkboxes.length) * 100;

      // Update counter text
      countElement.textContent = `${completedCounter} / ${checkboxes.length} completed`;

      // Update progress bar width
      progIndicator.style.width = `${percentage}%`;
  };

  // Function to handle checkbox toggle
  const toggleCheckbox = (checkbox) => {
      const isSelected = checkbox.checked;

      if (isSelected && completedCounter < 5) {
          // Checkbox is checked and counter is less than 5
          completedCounter++;
      } else if (!isSelected && completedCounter > 0) {
          // Checkbox is unchecked and counter is greater than 0
          completedCounter--;
      }

      updateCounterAndProgressBar();
  };

  // Add click event listener to each checkbox
  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
          toggleCheckbox(checkbox);
      });
  });
});

// Displaying Menu and alert
const notifying = document.querySelector(".notify-menu");
const profileName = document.querySelector(".profileName");
const alertBox = document.querySelector(".alert-box");
const bellIcon = document.querySelector(".bell");

profileName.onclick = () => {
  // Toggle the display property
  notifying.style.display = notifying.style.display === "none" || notifying.style.display === "" ? "block" : "none";
};

bellIcon.onclick = () => {
  // Toggle the display property
  alertBox.style.display = alertBox.style.display === "none" || alertBox.style.display === "" ? "block" : "none";
};
