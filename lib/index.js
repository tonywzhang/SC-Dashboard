import * as d3 from "d3";
import { updateAverage } from './average.js';
import { updateValues } from './netWorth.js';
import { myChart } from './scoringComp.js';
import { seasonChart} from './gameLog.js';
import { pieChart } from './contribution.js';
import { average } from './average.js';
import { myIndivChart } from './individual.js';


pieChart();
updateAverage();
updateValues();
myIndivChart();
