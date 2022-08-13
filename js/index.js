// 获取视口高度---document.documentElement---即html整个网页
// document.body.scrollTop ==>网页被卷去的高
// document.documentElement.clientHeight ==>可见区域高度
// .scrollTop 获取滚动条下拉的高度
// .offsetTop 获取元素距离文档顶部的距离

//显示右边电梯导航
const elevator = document.querySelector(".xtx-elevator");
const entryTop = document.querySelector(".xtx_entry").offsetTop;
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= entryTop) {
    // console.log(333)
    // 侧边导航显示
    elevator.style.opacity = 1;
  } else {
    elevator.style.opacity = 0;
  }
});

//点击返回按钮，页面会返回顶部
//  将 document.documentElement.scrollTop 的值 设置为 0
const backTop = document.querySelector("#backTop");
backTop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

const newTop = document.querySelector(".xtx_goods_new").offsetTop; // 新鲜好物顶部距离
const popularTop = document.querySelector(".xtx_goods_popular").offsetTop; // 人气推荐
const brandTop = document.querySelector(".xtx_goods_brand").offsetTop; // 热门品牌
const topicTop = document.querySelector(".xtx_goods_topic").offsetTop; // 最新专题


// content: attr(data-text)  
// var box = document.querySelector(".box");
// console.log(box.className); //获取标签的原有属性值
// console.log(box.title); //获取标签的原有属性值
// console.log(box.dataset["content"]); //获取标签自定义属性的值
// box.dataset["content"] = "aaa"; //设置自定义属性的值。
const newGoods =  document.querySelector('[data-name="new"]') //新鲜好物
// console.log(newGoods)
const popularGoods = document.querySelector('[data-name="popular"]') //人气好物
const brandGoods = document.querySelector('[data-name="brand"]') //热门品牌
const topicGoods = document.querySelector('[data-name="topic"]') //最新专题


// 通过classList的方式追加和删除类名 add remove toggle
document.addEventListener("scroll", function () {
  const activeObj = document.querySelector(".xtx-elevator-list a.active");
  //如有高亮，先移除所有高亮。滚动到哪个区域，给哪个区域加高亮效果
  activeObj && activeObj.classList.remove("active");
  
  //  需要判断是否滚动到对应的位置
  if (document.documentElement.scrollTop >= newTop && document.documentElement.scrollTop < popularTop) {
    newGoods.classList.add("active");
  } else if (document.documentElement.scrollTop >= popularTop && document.documentElement.scrollTop < brandTop) {
    popularGoods.classList.add("active");
  } else if (document.documentElement.scrollTop >= brandTop && document.documentElement.scrollTop < topicTop) {
    brandGoods.classList.add("active");
  } else if (document.documentElement.scrollTop >= topicTop) {
    topicGoods.classList.add("active");
  }
});


// 点击哪个 去到哪个
newGoods.onclick = function() {
  // console.log(222);
  document.documentElement.scrollTop = newTop;
}
popularGoods.onclick = function() {
  // console.log(222);
  document.documentElement.scrollTop = popularTop;

}
brandGoods.onclick = function() {
  // console.log(222);
  document.documentElement.scrollTop = brandTop;

}
topicGoods.onclick = function() {
  // console.log(222);
  document.documentElement.scrollTop = topicTop;

}