# snowflakeJS

### Description

With snowflakeJS you can easily let it snow on your webpage. There is no need for special css or canvas, just pure javascript.

### Live demo
[Demo](https://aicdev.github.io/game-of-thrones-coming-soon-page/)

### Screenshot
Preview:
![alt text](https://github.com/AICDEV/snowflakeJS/blob/master/example.png)


### How to use when you clone/checkout this repository
If you check it out from this repository please run "yarn install" to install all necessary dependencies.
After that you can run "yarn build" to create a production bundle or "yarn start" to launch a webservice on port 8080
and see snowflakeJS in action.

### How to use from snowflake.min.js
Incluse the snowflake.min.js (located in dist folder) file in your webpage. After that you can use it like follow:

```html
 <script type="text/javascript" src="snowflake.min.js"></script></head>
```


```javascript
const snowflake = new SnowflakeJs(25,250,5000,5,25);
snowflake.init();
```

Currently it comes as umd definition.

### How to use when install with npm
It comes as es6 module. You can simply import it to your project.

```javascript
import {SnowflakeJs} from "@aicdev/snowflakejs";

const snowflake = new SnowflakeJs();
snowflake.init();
```

Parameters in detail:
- 25 = FPS
- 250 = inital count of snowflakes
- 5000 = lifetime in ms 
- 5 = max fall speed
- 25 = max size of snowflake

LET IT SNOW.

