<h1>GraphQL Fetch Example 🚀</h1>

<p>A simple <strong>GraphQL client setup</strong> with <strong>Vite & React</strong> using <strong>Apollo Client</strong>. This project demonstrates how to fetch data from a GraphQL API while handling <strong>loading states</strong> and <strong>error messages</strong> to create a smooth user experience.</p>

<h2>🛠 Features</h2>
<ul>
  <li>🔥 <strong>Vite</strong> for a fast development experience</li>
  <li>⚡ <strong>Apollo Client</strong> to interact with a GraphQL API</li>
  <li>🎛 <strong>Loading & Error Components</strong> for better UX</li>
  <li>🔗 <strong>Modular Components</strong> for scalability</li>
</ul>

<h2>📦 Installation</h2>
<p>First, clone the repository:</p>

<pre><code>git clone https://github.com/DaliGabriel/GraphqlFetchExample.git
cd GraphqlFetchExample
</code></pre>

<p>Then, install dependencies:</p>

<pre><code>npm install</code></pre>

<p>or using Yarn:</p>

<pre><code>yarn install</code></pre>

<h2>🚀 Running the Project</h2>
<p>Start the development server with:</p>

<pre><code>npm run dev</code></pre>

<p>or</p>

<pre><code>yarn dev</code></pre>

<p>Then open <strong>http://localhost:5173/</strong> in your browser.</p>

<h2>🔗 GraphQL Query Example</h2>

<pre><code>
import { gql, useQuery } from "@apollo/client";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const DisplayLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return &lt;Loader /&gt;;
  if (error) return &lt;ErrorMessage error={error} /&gt;;

  return (
    &lt;&gt;
      &lt;h1 className="main-title"&gt;Locations&lt;/h1&gt;
      {data.locations.map((e: any) => (
        &lt;div key={e.id} className="card"&gt;
          &lt;span className="title"&gt;{e.name}&lt;/span&gt;
          &lt;img src={e.photo} alt={e.name} /&gt;
        &lt;/div&gt;
      ))}
    &lt;/&gt;
  );
};

export default DisplayLocations;
</code></pre>

<h2>📖 Learning Resources</h2>
<ul>
  <li><a href="https://graphql.org/">GraphQL Docs</a></li>
  <li><a href="https://www.apollographql.com/docs/react/">Apollo Client Docs</a></li>
  <li><a href="https://vitejs.dev/">Vite Docs</a></li>
</ul>

<h2>📌 Contributing</h2>
<p>If you'd like to contribute, feel free to fork the repository and submit a pull request!</p>

<hr>

<p>⭐ If you found this project useful, don't forget to give it a <strong>star</strong> on GitHub! ⭐</p>
