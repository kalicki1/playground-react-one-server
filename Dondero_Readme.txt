Install node.js
Install npm

Use npm to install create-react-app
npm install -g create-react-app

Use create-react-app to create an application named pennyreact.
npx create-react-app pennyreact

Delete all files from the src subdirectory.

Copy PennyHeader.jsx, PennyFooter.jsx, PennySearch.jsx to the src subdirectory.

Copy main.js to the src subdirectory and rename it index.js.

Delete all files except index.html from the public subdirectory.

Edit index.html to make it minimal.  Just HTML with a div element whose id is root.

Create a api subdirectory.

Copy book.py, database.py, penny.py, penny.sqlite, and penny.sql to the api subdirectory.

Add this line to package.json:
  "proxy": "http://localhost:5000",

Start the default app on localhost at port 3000.  Launches a browser and loads the React app.
cd pennyreact
npm start
Ctrl-c

Start the server on localhost at port 5000.
python penny.py 5000
