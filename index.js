'use strict';

const loremStr = "天地玄黄，宇宙洪荒，日月盈昃，辰宿列张，寒来暑往，秋收冬藏，闰余成岁，律吕调阳，云腾致雨，露结为霜，金生丽水，玉出昆冈，剑号巨阙，珠称夜光，果珍李柰，菜重芥姜，海咸河淡，鳞潜羽翔，龙师火帝，鸟官人皇，始制文字，乃服衣裳，推位让国，有虞陶唐，吊民伐罪，周发殷汤，坐朝问道，垂拱平章，爱育黎首，臣伏戎羌，遐迩一体，率宾归王，鸣凤在竹，白驹食场，化被草木，赖及万方，盖此身发，四大五常，恭惟鞠养，岂敢毁伤，女慕贞洁，男效才良，知过必改，得能莫忘，罔谈彼短，靡恃己长，信使可覆，器欲难量，墨悲丝染，诗赞羔羊，景行维贤，克念作圣，德建名立，形端表正，空谷传声，虚堂习听，祸因恶积，福缘善庆，尺璧非宝，寸阴是竞，资父事君，曰严与敬，孝当竭力，忠则尽命，临深履薄，夙兴温凊，似兰斯馨，如松之盛，川流不息，渊澄取映，容止若思，言辞安定，笃初诚美，慎终宜令，荣业所基，籍甚无竟，学优登仕，摄职从政，存以甘棠，去而益咏，乐殊贵贱，礼别尊卑，上和下睦，夫唱妇随，外受傅训，入奉母仪，诸姑伯叔，犹子比儿，孔怀兄弟，同气连枝，交友投分，切磨箴规，仁慈隐恻，造次弗离，节义廉退，颠沛匪亏，性静情逸，心动神疲，守真志满，逐物意移，坚持雅操，好爵自縻，都邑华夏，东西二京，背邙面洛，浮渭据泾，宫殿盘郁，楼观飞惊，图写禽兽，画彩仙灵，丙舍旁启，甲帐对楹，肆筵设席，鼓瑟吹笙，升阶纳陛，弁转疑星，右通广内，左达承明，既集坟典，亦聚群英，杜稿钟隶，漆书壁经，府罗将相，路侠槐卿，户封八县，家给千兵，高冠陪辇，驱毂振缨，世禄侈富，车驾肥轻，策功茂实，勒碑刻铭，盘溪伊尹，佐时阿衡，奄宅曲阜，微旦孰营，桓公匡合，济弱扶倾，绮回汉惠，说感武丁，俊义密勿，多士实宁，晋楚更霸，赵魏困横，假途灭虢，践土会盟，何遵约法，韩弊烦刑，起翦颇牧，用军最精，宣威沙漠，驰誉丹青，九州禹迹，百郡秦并，岳宗泰岱，禅主云亭，雁门紫塞，鸡田赤诚，昆池碣石，钜野洞庭，旷远绵邈，岩岫杳冥，治本于农，务兹稼穑，俶载南亩，我艺黍稷，税熟贡新，劝赏黜陟，孟轲敦素，史鱼秉直，庶几中庸，劳谦谨敕，聆音察理，鉴貌辨色，贻厥嘉猷，勉其祗植，省躬讥诫，宠增抗极，殆辱近耻，林皋幸即，两疏见机，解组谁逼，索居闲处，沉默寂寥，求古寻论，散虑逍遥，欣奏累遣，戚谢欢招，渠荷的历，园莽抽条，枇杷晚翠，梧桐蚤凋，陈根委翳，落叶飘摇，游鹍独运，凌摩绛霄，耽读玩市，寓目囊箱，易輶攸畏，属耳垣墙，具膳餐饭，适口充肠，饱饫烹宰，饥厌糟糠，亲戚故旧，老少异粮，妾御绩纺，侍巾帷房，纨扇圆洁，银烛炜煌，昼眠夕寐，蓝笋象床，弦歌酒宴，接杯举殇，矫手顿足，悦豫且康，嫡后嗣续，祭祀烝尝，稽颡再拜，悚惧恐惶，笺牒简要，顾答审详，骸垢想浴，执热愿凉，驴骡犊特，骇跃超骧，诛斩贼盗，捕获叛亡，布射僚丸，嵇琴阮箫，恬笔伦纸，钧巧任钓，释纷利俗，并皆佳妙，毛施淑姿，工颦妍笑，年矢每催，曦晖朗曜，璇玑悬斡，晦魄环照，指薪修祜，永绥吉劭，矩步引领，俯仰廊庙，束带矜庄，徘徊瞻眺，孤陋寡闻，愚蒙等诮，谓语助者，焉哉乎也，";

const sPostion = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640, 645, 650, 655, 660, 665, 670, 675, 680, 685, 690, 695, 700, 705, 710, 715, 720, 725, 730, 735, 740, 745, 750, 755, 760, 765, 770, 775, 780, 785, 790, 795, 800, 805, 810, 815, 820, 825, 830, 835, 840, 845, 850, 855, 860, 865, 870, 875, 880, 885, 890, 895, 900, 905, 910, 915, 920, 925, 930, 935, 940, 945, 950, 955, 960, 965, 970, 975, 980, 985, 990, 995, 1000, 1005, 1010, 1015, 1020, 1025, 1030, 1035, 1040, 1045, 1050, 1055, 1060, 1065, 1070, 1075, 1080, 1085, 1090, 1095, 1100, 1105, 1110, 1115, 1120, 1125, 1130, 1135, 1140, 1145, 1150, 1155, 1160, 1165, 1170, 1175, 1180, 1185, 1190, 1195, 1200, 1205, 1210, 1215, 1220, 1225, 1230, 1235, 1240, 1245];


const fastGenerateStr = function (length, type) {
  if (type === 'c') {
    let str = loremStr.substr(0, length);
    // fix end period
    if (str[str.length - 1] === '，') return str.substr(0, str.length - 1) + '。';
    return loremStr.substr(0, length);
  } else {
    const d = Math.floor(length / sPostion.length);
    const sIndex = sPostion[(length % sPostion.length) - 1];
    let sentence = "";
    for (let i = 0; i < d; i++) {
      sentence += loremStr;
    }
    if (loremStr.charAt(sIndex - 1) === '，') {
      return sentence + loremStr.substr(0, sIndex - 1) + '。';
    } else {
      return sentence + loremStr.substr(0, sIndex);
    }
  }
}

/**
 * Generate Chinese Lorem
 * @param length lorem length
 * @param type 'c': character; 'w': word
 * @return {*}
 */
module.exports = function (length, type) {
  if (type) {
    if (isNaN(parseInt(length))) throw new TypeError('length must be a integer')
    return fastGenerateStr(length, type);
  } else {
    var l = length.substr(0, length.length - 1);
    if (isNaN(parseInt(l))) throw new TypeError('length must be a integer')
    return fastGenerateStr(l, length.charAt(length.length - 1))
  }
}
