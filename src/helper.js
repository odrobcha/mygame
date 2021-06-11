

const requester = {
    install (Vue) {
        Vue.prototype.playSound = (el, time) => {
            el.currentTime = 0;
            el.play();
            setTimeout(() => {
                el.pause();
            }, time);


        };
        Vue.prototype.pauseSound = (el) => {
            el.pause();
        }

    }
}

export { requester }
