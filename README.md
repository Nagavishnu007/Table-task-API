I used the async/await method to run the code asynchronously and fetch data from an API endpoint. The API contains a total of 200 records, but I fetched only the first 50 and displayed them in a table format. Additionally, I included an input field to allow users to search for data based on the title.

For state management, I used Redux to store API data globally. However, since this task consists of only one component, Redux was not necessary—I could have directly managed the state within the component itself. Despite this, I implemented Redux to enhance my practical knowledge and experience.

Before integrating the API, I tested the endpoint using Postman to verify its correctness. Once I received a 200 (OK) status response, I proceeded with the implementation.

As per the task requirements, I have successfully completed the task.

Live demo link (test purpose) : table-task-api.netlify.app

