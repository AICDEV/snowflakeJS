import {Snowflake} from "./snowflake";
import {addClassToElement, uuid, addAttributeToElement} from "./utils";

class SnowfallJs {

    elements = [];

    constructor(frames=25, count=50, lifetime=5000, maxSpeed=4, width=15, heigth=15) {
        this.frames = 1000/frames;
        this.count = count;
        this.lifetime = lifetime;
        this.maxSpeed = maxSpeed;
        this.width = width;
        this.heigth = heigth;
        this._buildElements();
    }

    init() {
        this.startTime = Date.now();
        window.requestAnimationFrame(this._frame.bind(this));
        return;
    }

    
    _buildElements() {
        for(let i = 0; i < this.count;i++) {
            this._spanElement();
        }
    }

    _spanElement() {
        const el = document.createElement("div"); 
        const elUuid = uuid();
        addClassToElement(el, "snowflake");
        addAttributeToElement(el, "id", elUuid)
        document.body.append(el);
        this.elements.push({
            uuid: elUuid,
            element: new Snowflake(el, this._spanElement.bind(this),this._removeElement.bind(this), elUuid, this.lifetime, this.maxSpeed, this.width, this.heigth)
        });
    }

    _removeElement(uuid) {
        const index = this.elements.findIndex((entry) => entry.uuid === uuid);
        if(index > -1) {
            this._spanElement();
            setTimeout(() => {
                this.elements.slice(index,1);
                document.getElementById(uuid).remove();
            },this.lifetime);
        }
    }

    _frame() {
        window.requestAnimationFrame(this._frame.bind(this))
        const initTime = Date.now();
        const delta = initTime - this.startTime;
        if(delta > this.frames) {
            this.startTime = initTime -(delta % this.frames);
            this.elements.map((entry) => {
                entry.element.positioning();
            })
        }
    }
}

export {SnowfallJs};
