const fortuneText = document.getElementById("fortune")
const fortuneImg = document.getElementById("photo")
const genfortuneBtn = document.getElementById("fortuneBtn")

genfortuneBtn.addEventListener("click", generateFortune);

const fortuneList = [
    {
        text: "Ice cream is always the solution.",
        img: "wolfchan1.PNG"
    },
    {
        text: "Error 404: Fortune Not Found – Abort, Retry, Ignore?",
        img: "wolfchan2.PNG"
    },
    {
        text: "I owe you brownies.",
        img: "wolfchan3.PNG"
    },
    {
        text: "You can always find happiness at work on Fridays.",
        img: "wolfchan4.PNG"
    },
    {
        text: "It could be better, but it’s good enough for now.",
        img: "wolfchan5.PNG"
    },
    {
        text: "Don’t panic.",
        img: "wolfchan6.PNG"
    },
    {
        text: "Straightening your back would do wonders for your posture. Stop slouching!",
        img: "wolfchan7.PNG"
    },
    {
        text: "If you think I can sum up your whole life in a little piece of paper – you’re crazy.",
        img: "wolfchan8.PNG"
    },
    {
        text: "Be optimistic, there doesn’t seem to be much use in anything else.",
        img: "leebit1.PNG"
    },
    {
        text: "Start everyday off with a smile, at least then it’ll be a good start.",
        img: "leebit2.PNG"
    },
    {
        text: "You will have a good day.",
        img: "leebit3.PNG"
    },
    {
        text: "Think carefully before answering that question.",
        img: "leebit4.PNG"
    },
    {
        text: "Stop procrastinating… starting tomorrow.",
        img: "leebit5.PNG"
    },
    {
        text: "When in doubt, mumble.",
        img: "leebit6.PNG"
    },
    {
        text: "Plan to be spontaneous tomorrow.",
        img: "leebit7.PNG"
    },
    {
        text: "You will soon discover a hidden talent.",
        img: "leebit8.PNG"
    },
    {
        text: "Life is a series of choices. Today yours are good ones.",
        img: "dwaekki1.PNG"
    },
    {
        text: "There is no angry way to say bubbles.",
        img: "dwaekki2.PNG"
    },
    {
        text: "The printer will always work.",
        img: "dwaekki3.PNG"
    },
    {
        text: "You will soon go someplace you’ve always wanted to be.",
        img: "dwaekki4.PNG"
    },
    {
        text: "You don’t need to be the best. Just better than the rest of the competition.",
        img: "dwaekki5.PNG"
    },
    {
        text: "Don’t forget to drink your water.",
        img: "dwaekki6.PNG"
    },
    {
        text: "I’m proud of you.",
        img: "dwaekki7.PNG"
    },
    {
        text: "Now is the time to try something new.",
        img: "dwaekki8.PNG"
    },
    {
        text: "Good luck will soon befall you.",
        img: "jiniret1.PNG"
    },
    {
        text: "You will be invited to an exciting event.",
        img: "jiniret2.PNG"
    },
    {
        text: "You will live a long and happy life.",
        img: "jiniret3.PNG"
    },
    {
        text: "Something you lost will turn up very soon.",
        img: "jiniret4.PNG"
    },
    {
        text: "It is better to have fun than do nothing.",
        img: "jiniret5.PNG"
    },
    {
        text: "Eat good food, you deserve it!",
        img: "jiniret6.PNG"
    },
    {
        text: "Enjoy life. It’s not a dress rehearsal.",
        img: "jiniret7.PNG"
    },
    {
        text: "There is a great exchange of wealth happening in your future.",
        img: "jiniret8.PNG"
    },
    {
        text: "I’m never gonna give you up, never gonna let you down.",
        img: "hanquokka1.PNG"
    },
    {
        text: "You should really send that text.",
        img: "hanquokka2.PNG"
    },
    {
        text: "Stay healthy. Take a walk.",
        img: "hanquokka3.PNG"
    },
    {
        text: "Defy everyone’s expectations.",
        img: "hanquokka4.PNG"
    },
    {
        text: "As the purse is emptied, the heart is filled.",
        img: "hanquokka5.PNG"
    },
    {
        text: "You will see someone you miss soon.",
        img: "hanquokka6.PNG"
    },
    {
        text: "I cannot help you, for I am just a cookie.",
        img: "hanquokka7.PNG"
    },
    {
        text: "Be cautious while walking alone in the dark.",
        img: "hanquokka8.PNG"
    },
    {
        text: "Something wonderful is about to happen.",
        img: "bbokari1.PNG"
    },
    {
        text: "It is never too late. Just as it is never too early.",
        img: "bbokari2.PNG"
    },
    {
        text: "Don’t quit. Be a menace.",
        img: "bbokari3.PNG"
    },
    {
        text: "You will be successful in your work.",
        img: "bbokari4.PNG"
    },
    {
        text: "Ask your mom, she knows best (sometimes).",
        img: "bbokari5.PNG"
    },
    {
        text: "Get some sleep, it’s good for you.",
        img: "bbokari6.PNG"
    },
    {
        text: "Soon life will become much more interesting.",
        img: "bbokari7.PNG"
    },
    {
        text: "Today is the tomorrow we worried about yesterday.",
        img: "bbokari8.PNG"
    },
    {
        text: "Don’t quit, you can do it!",
        img: "puppym1.PNG"
    },
    {
        text: "A friend will soon reveal a hidden talent.",
        img: "puppym2.PNG"
    },
    {
        text: "Good job.",
        img: "puppym3.PNG"
    },
    {
        text: "Be kind to pigeons. A statue will someday be made of you.",
        img: "puppym4.PNG"
    },
    {
        text: "What’s the speed of dark?",
        img: "puppym5.PNG"
    },
    {
        text: "How much deeper would the ocean be if sponges didn’t exist?",
        img: "puppym6.PNG"
    },
    {
        text: "Don’t gamble, that’s a bad financial decision.",
        img: "puppym7.PNG"
    },
    {
        text: "You should say yes to that.",
        img: "puppym8.PNG"
    },
    {
        text: "You may be hungry soon: get some food now.",
        img: "foxiny1.PNG"
    },
    {
        text: "Everyone agrees you are the best.",
        img: "foxiny2.PNG"
    },
    {
        text: "When the moment comes, take the top one.",
        img: "foxiny3.PNG"
    },
    {
        text: "Everybody feels lucky to have you as a friend.",
        img: "foxiny4.PNG"
    },
    {
        text: "Give yourself some peace and quiet.",
        img: "foxiny5.PNG"
    },
    {
        text: "Pick up that hobby, it’ll be fun!",
        img: "foxiny6.PNG"
    },
    {
        text: "The best has yet to come.",
        img: "foxiny7.PNG"
    },
    {
        text: "Use the force.",
        img: "foxiny8.PNG"
    },
];

function generateFortune() {
    let random = Number.parseInt(Math.random() * fortuneList.length);
    fortuneText.innerHTML = `<span>${fortuneList[random].text}</span>`;
    fortuneImg.src = fortuneList[random].img
}