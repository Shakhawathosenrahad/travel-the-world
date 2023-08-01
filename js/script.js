const menu = document.querySelector(".menu"),
      close = document.querySelector(".close"),
      links = document.querySelector(".links")









menu.addEventListener("click", () => {
    links.style.left = 0;

    close.addEventListener("click", () => {
        links.style.left = "-150px";
    })
})

// user reviews 

const reviews = document.querySelector(".reviews"),
      user = reviews.querySelector(".user"),
      arrow = document.querySelectorAll(".arrow")


let isdraging = false, startX, startscrollLeft;

const draging = (e) => {
    if(!isdraging) return;
    reviews.scrollLeft = startscrollLeft - (e.pageX - startX);
}

const dragstart = (e) => {
    isdraging = true;
    startX = e.pageX;
    startscrollLeft = reviews.scrollLeft;
}

const dragend = () => {
    isdraging = false;
}

reviews.addEventListener("mousemove", draging);
reviews.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", dragend);

arrow.forEach((item, i) => {
    item.addEventListener("click", () => {
        reviews.classList.add("smooth");
        if(i === 0) {
            reviews.scrollLeft -= 250;
        }
        else {
            reviews.scrollLeft += 250;
        }
        reviews.classList.remove("smooth");
    })
})