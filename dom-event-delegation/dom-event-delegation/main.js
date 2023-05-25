const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  console.log(
    'closest .task-list-item:',
    event.target.closest('.task-list-item')
  );

  const $removedTaskListItem = event.target.closest('.task-list-item');
  if (event.target.matches('button')) {
    $removedTaskListItem.remove();
  }
});
