# SC30 JavaScript Proposal

Stephen Curry is an NBA Superstar, but is often criticized during the regular season for his "sub-standard" play. SC30 is a dashboard that is designed to highlight Steph's regular season contributions to the 2017-18 Golden State Warriors on their journey to win their 6th world championship.

SC30 will use stats mostly pulled from [NBA.com](http://stats.nba.com) and will dynamically update stats with each game.

# MVP Features

- [ ] Charts are displayed correctly, and are easy to understand
- [x] Career Accomplishments are static, eventually update with trendline
- [ ] Line graph rendering Steph's points per game over the course of the season.
- [ ] Player contribution chart shows Steph's stats compared to his teammates
- [ ] Player selected in contribution chart is shown in the adjacent chart with their relevant stats
- [x] Net Worth & Social Media #s update regularly.
- [x] Bar Chart displaying Steph's most successful scoring seasons.


This project will include:

- [ ] A production ReadMe

The Player Contribution Chart and accompanying Bar Chart mentioned above will look and have similar functionality with [this](http://bl.ocks.org/diethardsteiner/3287802).  


# Wireframes

This app will consist of a single screen with multiple graphs displaying his performance on and off the court, as well as nav links to my Github/LinkedIn.

![SC30 Logo](/WireFrame1.png "Logo Title Text 1")


# Architecture and Technologies

This project will be implemented with the following technologies.

* D3.js for visualization.
* Vanilla JavaScript for data.

### File Structure

* docs
* lib
  * index.js
  * chart_x.js
* style.css
* index.html


# Implementation Timeline

<b>Day 1:</b> Setup all files properly, figure out how to successfully parse data(JSON/CSV) from both local and online URLs. Learn the basics of D3.js. Be able to render an object to index.html and be able to accomplish basic manipulation of data.

<b>Day 2:</b> Have two graphics displaying properly.

<b>Day 3:</b> Have remaining graphics displaying properly.

<b>Day 4:</b> CSS charts to look nice.

# Future Features

- [ ] Be able to render charts with data based on any chosen season of Curry's career.
- [ ] All charts update dynamically with each game in the season.
- [ ] Add playoff stat charts
- [ ] Charts are comparable/moveable.
- [ ] Make trendline table interactive, clicking on a certain game will bring up stats, video highlights from that respective game
- [ ] All charts are dynamic
