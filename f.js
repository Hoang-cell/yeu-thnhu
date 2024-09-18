const wishes = [
    "Mong em có giấc mơ đẹp!",
    "Ngủ ngon nhé, tình yêu của anh!",
    "Chúc em mơ thấy những điều tuyệt vời!",
    "Hãy để mọi lo toan tan biến khi em ngủ!",
    "Yêu em từ chân trời này đến chân trời khác!"
];

document.getElementById("loveButton").onclick = function() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    document.getElementById("wish").innerText = wishes[randomIndex];
    document.getElementById("message").innerText = "Yêu em rất nhiều! ❤️";
};