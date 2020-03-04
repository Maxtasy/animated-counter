const counters = document.querySelectorAll(".amount");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.textContent;

        const inc = target / speed;

        if (count < target) {
            counter.textContent = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            count.textContent = target;
        }
    }

    updateCount();
});