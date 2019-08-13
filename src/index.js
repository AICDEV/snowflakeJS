import {SnowflakeJs} from "./core"
(function(window) {
    if(typeof(window.snowflakeJs) === 'undefined'){
        window.snowflakeJs = SnowflakeJs;
      }
})(window);