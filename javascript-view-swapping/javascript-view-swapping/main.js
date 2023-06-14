const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (event) => {
  // Checking when a click was on a tab
  if (event.target.matches('.tab')) {
    // Checking for which tab to be active
    for (const tab of $tabs) {
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }

    // Turning on the active tab's view
    for (const view of $views) {
      if (
        view.getAttribute('data-view') ===
        event.target.getAttribute('data-view')
      ) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    }
  }
});
