const uuid = () => {
    return (id()+id()+"-"+id()+"-"+id()+"-"+id()+"-"+id()+id()+id());
};

const id = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

const addClassToElement = (el, className) => {
    el.classList.add(className);
    return;
}

const addAttributeToElement = (el, attr, value) => {
    el.setAttribute(attr, value);
    return;
}

const removeClassFromElement = (el, className) => {
    el.classList.remove(className);
    return;
}

export {uuid, addClassToElement, removeClassFromElement, addAttributeToElement};
