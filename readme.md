# snowflakeJS

### Description

With snowflakeJS you can easily let it snow on your webpage. There is no need for special css or canvas, just pure javascript.

### Screenshot
Preview:
![alt text](https://github.com/AICDEV/snowflakeJS/blob/master/example.png)


### How to use when you clone/checkout this repository
If you check it out from this repository please run "yarn install" to install all necessary dependencies.
After that you can run "yarn build" to create a production bundle or "yarn start" to launch a webservice on port 8080
and see snowflakeJS in action.

### How to use
Incluse the snowflake.min.js (located in dist folder) file in your webpage. After that you can use it like follow:

```html
 <script type="text/javascript" src="snowflake.min.js"></script></head>
```


```javascript
   const snowflake = new SnowflakeJs();
            snowflake.init();
```

Currently it comes as umd definition.

Parameters in detail:
- 25 = FPS
- 250 = inital count of snowflakes
- 5000 = lifetime in ms 
- 5 = max fall speed
- 15 = width from snowflake
- 15 = height from snowflake

LET IT SNOW.