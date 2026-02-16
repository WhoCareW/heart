let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:("
];

const imageList = [
    "h.png",          // 初始图片
    "h1.png",     // 第一次点击后
    "h2.png",     // 第二次点击后
    "h3.png",      // 第三次点击后
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.1);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 20; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    let imageIndex = Math.min(clickCount, imageList.length - 1);
    mainImage.src = imageList[imageIndex];
});

// 为 Yes 按钮添加点击事件
yesButton.addEventListener("click", function() {
    mainImage.style.transform = "none";
    questionText.style.transform = "none";

    // 1. 删除所有按钮（隐藏或移除）
    yesButton.remove();      // 移除“行”按钮
    noButton.remove();       // 移除“不行”按钮
    // 或者使用 style.display = "none" 隐藏，但 remove 更彻底

    // 2. 更换图片
    mainImage.src = "ha.png";  // 请替换为您准备好的开心图片文件名

    // 3. 在图片上方输出文字“好耶ヽ(✿ﾟ▽ﾟ)ノ”
    // 创建一个新元素（例如 div）
    let message = document.createElement("div");
    message.textContent = "好耶ヽ(✿ﾟ▽ﾟ)ノ 新年快乐！";
    message.style.fontSize = "2rem";
    message.style.marginBottom = "20px";
    message.style.color = "#ff69b4";  // 粉色，可按喜好修改
    message.style.fontWeight = "bold";
    message.style.marginBottom = "100px";  // 文字和图片之间留出10px空隙

    // 将新元素插入到图片之前（即图片上方）
    // container 是图片和按钮的父容器
    let container = document.querySelector(".container");
    container.insertBefore(message, mainImage);

    // 可选：隐藏原有的问题文本，或也修改它
     questionText.style.display = "none";  // 如果不想显示原问题
});



