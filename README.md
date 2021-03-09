# Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory

## These are the files for the homework assignment associated with section 19 of the OSU Web Development Bootcamp

* Here is a link to the [github](https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)
* Here is a link to the deployed [application](https://pjdip.github.io/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory/)

The goal of this assignment was to build an employee directory app using [React](https://reactjs.org/). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In order to most effectively manage component state and respond to user events, I used the [react-table](https://react-table.tanstack.com/) library. This made it easy to add filtering, sorting, and pagination to the employee table. Random employee data was generated from the [Random User API](https://randomuser.me/).

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Badges](#badges)
* [License](#license)

## Installation

Installation requirements include node.js. Dependencies can be loaded by running 'npm install' from the main directory, once the repo has been cloned.

## Usage

This is a one page app. Upon loading, you will be presented with a table that displays information about employees. You can click any of the table headers to sort the employees by that category. Type into the search form in order to filter for all properties. For example, typing "Washington" will filter for all employees for which that term appears in their info (even if it is apart of their name instead of location). At the bottom of the table is a pagination interface that is intuitive.

Here are some screenshots:

![Main](public/images/Main.png)


![Filter](public/images/Filter.png)


![Sort](public/images/sort.png)



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Credits

Thanks to React:
* [website](https://reactjs.org/)
* [docs](https://create-react-app.dev/)
* [deployment](https://create-react-app.dev/docs/deployment/#github-pages)

Thanks to [Random User API](https://randomuser.me/) [docs](https://randomuser.me/documentation)

Special Thanks to React-Table:
* [npm](https://www.npmjs.com/package/react-table)
* [docs](https://react-table.tanstack.com/docs/overview)
* [useTable](https://react-table.tanstack.com/docs/api/useTable)
* [useSortBy](https://react-table.tanstack.com/docs/api/useSortBy)
* [useGlobalFilter](https://react-table.tanstack.com/docs/api/useGlobalFilter)
* [usePagination](https://react-table.tanstack.com/docs/api/usePagination)

Special Thanks to [ChilledCow](https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow) for providing chill lofi beats to code to

## Badges

![languages](https://img.shields.io/github/languages/count/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)
![top-language](https://img.shields.io/github/languages/top/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)
![repo-size](https://img.shields.io/github/repo-size/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)
![open-issues](https://img.shields.io/github/issues-raw/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)
![last-commit](https://img.shields.io/github/last-commit/pjdip/Philip-DiPaula-OSU-bootcamp-hwk19-React-Employee-Directory)

## License

Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)

---