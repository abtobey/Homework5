##Scheduler

This tool works by storing the schedule in the local storage and gets the current time from moment.js.

First, it checks the local storage and initializes a new blank array for each hour if the local storage is empty. If not, it parses the local storage item and fills the array.

All the elements in the schedule are created by the DOM. a for loop creates a row, time box, text area and button for each hour, each of which uses bootstrap notation in the class names to format the columns properly.

When a save button is clicked, it saves the corresponding text area into the scheduleList array, and uses JSON.stringify to send it back to local storage.