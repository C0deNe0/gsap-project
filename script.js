function page1Animation() {
    var tl = gsap.timeline();

tl.from("nav h1,nav h4,nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.2,
    stagger:0.15
})

tl.from(".center-part1 h1,.center-part1 p",{
    opacity:0,
    duration:1,
    x:-330,
    stagger:0.2,
    delay:0.1,
})
tl.from(".center-part2 img",{
    x:500,
    opacity:0,
    delay:0.4,

},"-=1")

tl.from(".center-part1 button",{
    y:-11,
    opacity:0,
    delay:0.01
},"-=1")

tl.from(".section1bottom img",{
    y:-10,
    opacity:0,
    stagger:0.3,
    delay:0.3,
    duration:0.7
},"-=1")
}

page1Animation();