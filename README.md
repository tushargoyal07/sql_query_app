# SQL Query Application

## Overview

This is a simple SQL query application built using Next.js. The application allows users to execute predefined SQL queries on a CSV dataset and view the results. It includes a graphical representation of the schema and supports custom queries.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Technologies Used

- **Next.js:** The application is built using the Next.js framework, providing server-side rendering and a seamless development experience.

- **PapaParse:** The PapaParse library is used for parsing CSV data. It simplifies the process of working with CSV files.

- **React:** The application is developed using React, enabling the creation of dynamic and interactive user interfaces.

- **Tailwind CSS:** The Tailwind CSS framework is utilized for styling, providing a utility-first approach to building styles.

## Page Load Time

The page load time was measured using the following method in the `Home` component:

```javascript
console.time('myoperation');
// ... code ...
console.timeEnd('myoperation');
```

The recorded page load time during the last measurement was approximately `0.009` seconds.

## Performance Optimizations

Several optimizations have been implemented to improve the performance of the application:

1. **Asynchronous Data Fetching:**
   Data fetching is performed asynchronously, preventing the user interface from blocking during data retrieval.

2. **Conditional Rendering:**
   Loading and error states are conditionally rendered to provide a better user experience.

3. **Schema Component:**
   A separate `Scheema` component is created to display the graphical representation of the dataset schema, reducing the complexity of the main component.

4. **Mock Data Fetching:**
   A simulated delay is introduced in the `fetchMockData` function to emulate the asynchronous nature of real data fetching.

5. **Query Optimization:**
   The application filters data based on predefined and custom queries, ensuring efficient data retrieval.

It's important to note that the measured page load time is influenced by various factors, including the simulated delay and the efficiency of the browser's rendering engine. In a production environment, actual data fetching from a server would play a significant role in determining the overall performance. Regular profiling and monitoring are recommended for ongoing optimization efforts.