let slideIndex1 = 1
let slideIndex2 = 1
let slideIndex3 = 1
let slideIndex4 = 1
showSlides1(slideIndex1)
showSlides2(slideIndex2)
showSlides3(slideIndex3)
showSlides4(slideIndex4)

function moveSlide1(n) {
    showSlides1(slideIndex1 += n)
}
function currentSlide1(n) {
    showSlides1(slideIndex1 = n)
}
function showSlides1(n) {
    let i
    let slides1 = document.getElementsByClassName('img495')
    if (n > slides1.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none'
    }
    slides1[slideIndex1-1].style.display = 'block'
}



function moveSlide2(n) {
    showSlides2(slideIndex2 += n)
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n)
}
function showSlides2(n) {
    let i
    let slides2 = document.getElementsByClassName('img2')
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none'
    }
    slides2[slideIndex2-1].style.display = 'block'
}



function moveSlide3(n) {
    showSlides3(slideIndex3 += n)
}
function currentSlide3(n) {
    showSlides3(slideIndex3 = n)
}
function showSlides3(n) {
    let i
    let slides3 = document.getElementsByClassName('img3')
    if (n > slides3.length) {
        slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides3.length
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none'
    }
    slides3[slideIndex3-1].style.display = 'block'
}



function moveSlide4(n) {
    showSlides4(slideIndex4 += n)
}
function currentSlide4(n) {
    showSlides4(slideIndex4 = n)
}
function showSlides4(n) {
    let i
    let slides4 = document.getElementsByClassName('img4')
    if (n > slides4.length) {
        slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides4.length
    }
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = 'none'
    }
    slides4[slideIndex4-1].style.display = 'block'
}