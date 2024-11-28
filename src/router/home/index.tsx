const ReadmeDisplay = () => {
  return (
    <div className="container mx-auto">
      <div className="markdown-content p-4">
        <h1 id="bettermode-community-web-application">Bettermode Community Web Application</h1>
        <h2 id="table-of-contents">Table of Contents</h2>
        <ol>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
          </li>
          <li>
            <a href="#project-structure">Project Structure</a>
          </li>
          <li>
            <a href="#available-scripts">Available Scripts</a>
          </li>
          <li>
            <a href="#technologies-used">Technologies Used</a>
          </li>
        </ol>
        <hr />
        <h3 id="introduction">Introduction</h3>
        <p>
          The Bettermode Community Web Application is a clone of Bettermode&#39;s posts list and
          gallery, featuring fake authentication. Built with ReactJS and ViteJS, the app uses
          Tailwind CSS for responsive design and dark/light theme functionality. It leverages
          GraphQL and React Query for efficient data fetching and mutations. The project also
          includes robust unit testing using Vitest and Testing Library/React to ensure high-quality
          and maintainable code.
        </p>
        <hr />
        <h3 id="features">Features</h3>
        <p>The Bettermode Community Web Application offers the following features:</p>
        <ol>
          <li>
            <strong>Authentication</strong>: Users can sign in and sign out to access the
            application.
          </li>
          <li>
            <strong>Posts List Gallery</strong>: A responsive and visually appealing gallery
            displaying a list of posts.
          </li>
          <li>
            <strong>Post Details</strong>: View detailed information about individual posts.
          </li>
          <li>
            <strong>Post Reactions</strong>: Users can react to posts with likes or other reactions.
          </li>
          <li>
            <strong>Dark and Light Theme</strong>: Users can switch between dark and light themes
            for a personalized experience.
          </li>
          <li>
            <strong>Responsive Design</strong>: Optimized for a seamless user experience across
            devices, including desktops, tablets, and mobile phones.
          </li>
        </ol>
        <hr />
        <h3 id="getting-started">Getting Started</h3>
        <p>
          To set up and run the <strong>Bettermode Community Web Application</strong> locally,
          follow these steps:
        </p>
        <h4 id="1-clone-the-repository">1. Clone the repository</h4>
        <p>Clone the repository to your local machine using the following command:</p>
        <pre>
          <code>
            git <span>clone</span> <span>https</span>
            ://github.com/mmdrn/bettermode-community.git
          </code>
        </pre>
        <h4 id="2-navigate-to-the-project-directory">2. Navigate to the project directory</h4>
        <p>Move into the cloned project directory:</p>
        <pre>
          <code>
            <span>cd</span> bettermode-community
          </code>
        </pre>
        <h4 id="3-install-dependencies">3. Install dependencies</h4>
        <p>Install the necessary packages by running:</p>
        <pre>
          <code>
            <span>yarn</span>
          </code>
        </pre>
        <h4 id="4-prepare-the-env-file">
          4. Prepare the <code>.env</code> file
        </h4>
        <p>
          To run the application properly, you need to create a <code>.env</code> file in the root
          directory of your project. This file will store the necessary environment variables
          required by the application.{" "}
          <strong>
            It is crucial that you set up the authentication token correctly, or the application
            will not function as expected.
          </strong>
        </p>
        <p>
          This application uses <strong>fake login</strong> because the developers do not have
          access to the exact authentication mechanism of the real Bettermode application. Instead,
          they implemented a fake authentication system, where the email, password, and a valid
          authorization token must be added to the <code>.env</code> file.
        </p>
        <h3 id="-env-file-structure-">
          <code>.env</code> file structure:
        </h3>
        <pre>
          <code>
            <span>VITE_AUTH_TOKEN</span>=<span>"&lt;your-auth-token&gt;"</span> # JWT authentication
            token (must be a real, valid token)
            <span>VITE_SPACE_ID</span>=<span>"&lt;space-id&gt;"</span> # Space identifier (optional:
            Leave empty string)
            <span>VITE_POST_TYPE_ID</span>=<span>"&lt;post-type-id&gt;"</span> # Post type
            identifier (optional: Leave empty string)
            <span>VITE_DEFAULT_FETCH_POSTS_LIMIT</span>=<span>8</span> # The default maximum number
            of posts to fetch per request
            <span>VITE_DEFAULT_THEME</span>=<span>"light"</span> # Default theme setting for the
            application (<span>"light"</span> or <span>"dark"</span>)<span>VITE_API_ORIGIN</span>=
            <span>"https://api.bettermode.com"</span> # API base URL
            <span>VITE_AUTH_PASSWORD</span>=<span>"&lt;your-auth-password&gt;"</span> # Default
            authentication password
            <span>VITE_AUTH_EMAIL</span>=<span>"&lt;your-auth-email&gt;"</span> # Default
            authentication email
          </code>
        </pre>
        <ul>
          <li>
            <strong>
              <code>VITE_DEFAULT_FETCH_POSTS_LIMIT</code>
            </strong>
            : Sets the default number of posts to fetch per request.
          </li>
          <li>
            <strong>
              <code>VITE_DEFAULT_THEME</code>
            </strong>
            : Specifies the application&#39;s default theme (e.g., &quot;light&quot; or
            &quot;dark&quot;).
          </li>
          <li>
            <strong>
              <code>VITE_API_ORIGIN</code>
            </strong>
            : The base URL for the Bettermode API.
          </li>
        </ul>
        <p>Important Notes:</p>
        <ul>
          <li>
            <strong>
              <code>VITE_AUTH_TOKEN</code>
            </strong>
            : This is a critical value. You must add a real and{" "}
            <code>valid JWT authorization token</code> here to access the{" "}
            <code>Bettermode API</code>. If this token is incorrect or missing, the application will
            not be able to fetch posts or authenticate users properly.
          </li>
          <li>
            <strong>
              <code>VITE_AUTH_PASSWORD and VITE_AUTH_EMAIL</code>
            </strong>
            : These values are used for fake authentication. You can set any email and password
            here, but they must match what you input when logging in. Upon successful login, the
            token from this environment variable will be stored in the user&#39;s{" "}
            <code>cookies</code>. After logging in with the correct credentials, the application
            will store a token key in the user&#39;s cookies, which will allow the user to access
            the posts list tied to that token.
          </li>
        </ul>
        <p>Authentication Flow:</p>
        <ul>
          <li>
            After setting up the <code>.env</code> file, navigate to <code>/signin</code>.
          </li>
          <li>
            Enter the <code>email and password</code> defined in the <code>.env</code> file. If the
            credentials are correct, the application will log you in and store the token in your
            cookies.
          </li>
          <li>
            Once logged in, the user will be redirected to the home page and can access the{" "}
            <code>/posts</code> route to see the posts list tied to the provided token.
          </li>
        </ul>
        <h4 id="5-run-the-development-server">5. Run the development server</h4>
        <p>Start the development server with:</p>
        <pre>
          <code>yarn dev</code>
        </pre>
        <p>
          The application will be available at <code>http://localhost:5173</code>.
        </p>
        <h4 id="6-explore-the-application">6. Explore the application</h4>
        <p>Open your browser and navigate through the following routes:</p>
        <ul>
          <li>
            <strong>
              <code>/</code>
            </strong>
            : The home page displaying project documentation.
          </li>
          <li>
            <strong>
              <code>/signin</code>
            </strong>
            : A fake login mechanism is implemented here.
            <ul>
              <li>
                To use it, add your credentials and a valid authorization token to the{" "}
                <code>.env</code> file.
              </li>
              <li>
                Upon successful login, a <code>token</code> will be stored in the user&#39;s
                cookies.
              </li>
              <li>
                The user will then be redirected to the home page, enabling access to the posts
                list.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>/posts</code>
            </strong>
            : Displays a paginated list of posts.
            <ul>
              <li>Users must be signed in to view this page.</li>
              <li>
                Posts include their associated reactions, and a &quot;Show More&quot; button enables
                navigation to subsequent pages.
              </li>
              <li>
                Pagination does not use URL search params, so refreshing the page will reset to the
                first page.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>/posts/:id</code>
            </strong>
            : Clicking on any post from the posts gallery will navigate the user to this route. The
            application will fetch details about the selected post and display it. This route is
            used to view individual post details, including additional information beyond the
            summary shown in the posts list.
          </li>
        </ul>
        <hr />
        <h3 id="project-structure-">Project Structure:</h3>
        <p>Explanation of Key Folders:</p>
        <ul>
          <li>
            <strong>
              <code>api/</code>
            </strong>
            : Contains API request files for various parts of the application (authentication,
            posts, reactions, etc.).
          </li>
          <li>
            <strong>
              <code>assets/</code>
            </strong>
            : Stores public assets such as logos and images.
          </li>
          <li>
            <strong>
              <code>components/</code>
            </strong>
            : Includes all common components used across the application, such as error handling,
            loading states, and UI components for posts and reactions.
          </li>
          <li>
            <strong>
              <code>contexts/</code>
            </strong>
            : Manages global state using React Context API for app-wide state sharing.
          </li>
          <li>
            <strong>
              <code>layouts/</code>
            </strong>
            : Contains layout components for managing the app&#39;s UI, including headers and
            footers.
          </li>
          <li>
            <strong>
              <code>router/</code>
            </strong>
            : Defines the routes of the application, including home, sign-in, post details, and
            error handling.
          </li>
          <li>
            <strong>Root files</strong>: Configuration files for build tools like Vite, TypeScript,
            ESLint, Prettier, and Tailwind CSS.
          </li>
        </ul>
        <p>
          This structure ensures that the project remains scalable, readable, and easy to extend.
        </p>
        <hr />
        <h2 id="available-scripts">Available Scripts</h2>
        <p>
          The project includes the following scripts for various development and production tasks:
        </p>
        <pre>
          <code>yarn dev</code>
        </pre>
        <p>
          Runs the development server.
          <br />
          Open <a href="http://localhost:5173">http://localhost:5173</a> to view the application in
          your browser.
          <br />
          The server reloads whenever you make edits.
        </p>
        <pre>
          <code>yarn build</code>
        </pre>
        <p>Builds the application for production.</p>
        <ul>
          <li>Transpiles TypeScript files.</li>
          <li>
            Generates optimized assets in the <code>dist</code> directory, ready to be deployed.
          </li>
        </ul>
        <pre>
          <code>yarn lint</code>
        </pre>
        <p>
          Runs ESLint across the codebase to identify and fix code quality issues.
          <br />
          Follow the suggested fixes to ensure your code adheres to best practices.
        </p>
        <pre>
          <code>yarn preview</code>
        </pre>
        <p>
          Serves the production build locally.
          <br />
          Useful for previewing the app before deploying it.
        </p>
        <pre>
          <code>yarn test</code>
        </pre>
        <p>
          Runs unit tests using Vitest.
          <br />
          You can write and execute test cases to ensure the application&#39;s reliability.
        </p>
        <hr />
        <h2 id="technology-used">Technology Used</h2>
        <p>This project is built using the following technologies:</p>
        <ul className="!list-none space-y-4 [&>li>h4]:font-bold">
          <li>
            <h4 id="frontend">Frontend</h4>
            <ul>
              <li>
                <strong>React</strong>: A JavaScript library for building user interfaces. It&#39;s
                used for creating the dynamic and responsive components of the web application.
              </li>
              <li>
                <strong>TypeScript</strong>: A superset of JavaScript that adds static types. It is
                used throughout the project to enhance developer productivity and improve code
                quality.
              </li>
              <li>
                <strong>Tailwind CSS</strong>: A utility-first CSS framework for creating custom
                designs without writing custom CSS. It allows for fast styling with pre-defined
                classes.
              </li>
              <li>
                <strong>Vite</strong>: A fast, next-generation bundler for JavaScript and TypeScript
                projects. It&#39;s used as the development and build tool.
              </li>
              <li>
                <strong>Vitest</strong>: A testing framework for unit and integration testing. It
                integrates well with Vite and provides a fast and reliable testing environment.
              </li>
              <li>
                <strong>React Router</strong>: A library for handling navigation and routing in the
                React application. It helps in managing different routes and views in the app.
              </li>
            </ul>
          </li>
          <li>
            <h4 id="state-management">State Management</h4>
            <ul>
              <li>
                <strong>React Context API</strong>: Used for managing global application state, such
                as user authentication and reaction states.
              </li>
            </ul>
          </li>
          <li>
            <h4 id="linting-and-formatting">Linting and Formatting</h4>
            <ul>
              <li>
                <strong>ESLint</strong>: A tool for identifying and fixing JavaScript and TypeScript
                code quality issues.
              </li>
              <li>
                <strong>Prettier</strong>: A code formatter that ensures consistent code styling
                across the project.
              </li>
            </ul>
          </li>
          <li>
            <h4 id="development-tools">Development Tools</h4>
            <ul>
              <li>
                <strong>Git</strong>: Version control system used to manage the project and
                collaborate with team members.
              </li>
              <li>
                <strong>Yarn</strong>: A package manager used for managing project dependencies and
                scripts.
              </li>
            </ul>
          </li>
          <li>
            <h4 id="testing">Testing</h4>
            <ul>
              <li>
                <strong>Jest</strong>: A testing framework used for unit and integration tests.
              </li>
              <li>
                <strong>React Testing Library</strong>: A library for testing React components by
                simulating user interactions.
              </li>
              <li>
                <strong>Vitest</strong>: A testing framework used for faster and more efficient
                tests within the Vite ecosystem.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReadmeDisplay;
