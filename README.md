# Welcome to SC30 Dashboard!

SC30 is a single page web-app that renders stats regarding Stephen Curry's 2017-18 NBA Season. This site is a dashboard for users to see how Steph progressed statistically through the season and compare his season to previous seasons.

[SC30 Dashboard Demo!](https://tonywzhang.github.io/SC-Dashboard/)

## Design

The SC30 Dashboard was designed and built from scratch in 4 days. The proposal was prepared to implement MVPs to get the site functional. Majority of components are produced via the D3 JavaScript Library. Improvements will be added over time. More details about the proposal can be viewed [here]().

## Features:

* `Curry's Point Per Game stat will be dynamically updated with each game he played during the 2017-18 season.`
* `Curry's season averages for all relevant stat categories in a pie chart that will be rendered using JavaScript D3 Library.`
* `Curry's Point Per Game contribution in relation to his teammates' totals will also be rendered using JavaScript D3 Library.`
* `Curry's scoring totals will be rendered on line chart using JavaScript D3 Library.`
* `Curry's social media following is shown dynamically updating over time.`
* `Curry's best statistical scoring seasons are rendered in a bar graph using JavaScript D3 Library.`

## Data

The SC30 Dashboard displays Curry's most important stats. Stats were mostly pulled from [Basketball Reference](https://www.basketball-reference.com/players/c/curryst01.html) and [NBA Stats](https://stats.nba.com/players/traditional/?sort=PTS&dir=-1&Season=2017-18&SeasonType=Regular%20Season&TeamID=1610612744). Other game log data was pulled from [Yahoo Sports](https://sports.yahoo.com/nba/players/4612/gamelog/).

## D3 Library

* `Pie Charts were rendered using D3 JavaScript library using tutorials from` [here](https://www.youtube.com/channel/UC18PYast-g9zjsavyv08oMg) `as a model.`
* `Line Chart was rendered using D3 JavaScript library using`[this tutorial](https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0) `as a model.`
* `Bar Graph was rendered using D3 JavaScript library using tutorials from `[Udemy](https://www.udemy.com/masteringd3js/learn/v4/overview)`and` [this tutorial](https://bl.ocks.org/mbostock/3885304).

![720 Logo](/ss1.png "Logo Title Text 1")
![720 Logo](/ss2.png "Logo Title Text 1")

## Dynamically Updated Stats

* `Curry's stats dynamically update on a game-by-game basis and update his Points Per Game total, keeping track of the total number of games he has played, as well as the most recent opponent he faced.`

* `CSS Grid was used to display data in an aesthetic manner.`

```js

export const updateAverage = () => {
  const interval = setInterval(function() {
    runningAverage = update(runningAverage, 'average');
    document.getElementById('average').innerHTML = parseFloat(runningAverage).toFixed(1);
    document.getElementById('gameCount').innerHTML = formatNum(game);
    document.getElementById('opponent').innerHTML = gameData[game-1].opp;
    if (game === 51){
      clearInterval(interval);
    }
  }, 1000);
}

```

`Curry's data is in order by game in the database, so I was able to iterate over them with a setInterval and update them on a set schedule.`

## Project Design

`The SC30 Dashboard was designed with simplicity and aesthetic in mind. With a few four days to pull this project together, the priority was to quickly learn D3 and be able to display the data in a manner that would be easy to read. Keeping code functional and easy to manage was prioritized over creating a fully dynamic dashboard, keeping in mind the intention to add more features in the future.`

## Technologies

### JavaScript
  * `This project was created entirely on JavaScript.`
  * `This project implements D3 JavaScript library to render raw numbers in an understandable manner.`

### Additional Technologies
  * `npm(Node Package Manager)`
  * `webpack`

## Future Additions

`In the future, I would like to add/improve:`

* `Dynamically updated pie chart with associated bar chart like` [this](http://bl.ocks.org/diethardsteiner/3287802).
* `Dynamically updated line chart that will update at the same rate as the first grid, "Steph Curry's Points Per Game", to give the user a visual representation of Curry's ups and downs.`
* `API related data pull for ALL NBA players`
* `NBA Team Dashboards`
* `Dynamically updated stat databases to automatically update D3 charts.`
* `Better labels for all charts to allow for an even more intuitive user experience.`
