import svg from "../assets/Snowflake.svg";

class Snowflake {

    constructor(element, span, remove, uuid, lifetime, maxSpeed, maxSize) {
        this.element = element;
        this.span = span;
        this.remove = remove;
        this.remove.bind(this);
        this.uuid = uuid;
        this.lifetime = lifetime;
        this.maxSpeed = maxSpeed;
        this.maxSize = maxSize;
        this.isRemoving = false;
        this.element.style.width = `${this._getRandomSnowsize()}px`;
        this.element.style.height = `${this._getRandomSnowsize()}px`;
        this.element.style.zIndex = "9999999";
        this.element.style.display = "block";
        this.speed = this._getSpeed();
        this._getRandomStartPosition();
    }

    _getRandomStartPosition() {
        this.initRect = this.element.getBoundingClientRect();
        this.element.style.position = "absolute";
        this.element.style.top = Math.floor((Math.random()*(window.innerHeight / 4)-this.initRect.height)+1)+"px";
        this.element.style.left = Math.floor((Math.random()*window.innerWidth-(this.initRect.width+5))+1)+"px";
        this.maxDown = (window.innerHeight-this.initRect.height);
        this.initRect = this.element.getBoundingClientRect();
        this.element.innerHTML = svg;
    }

    positioning() {
        if(!this.isRemoving) {
            if(this.initRect.y < this.maxDown) {
                this.initRect.y += this.speed;
                this.element.style.top = this.initRect.y+"px";
                return;            
            } else {
                this.isRemoving = true;
                this.remove(this.uuid);
            }
        }
    }

    _getSpeed() {
        return Math.floor((Math.random() * this.maxSpeed) + 1);
    }

    _getRandomSnowsize() {
        return Math.floor((Math.random() * this.maxSize) + 1);
    }
}

export {Snowflake};
