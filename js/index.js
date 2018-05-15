// //五星好评
// var stars = document.getElementsByClassName("star");
// var flag = 5; //这个值随便取，只要不是01234就行

// //循环载入鼠标移入事件
// for (var i = 0; i < stars.length; i++) {　　　　
//     stars[i].onmouseover = function () {　　　　　　
//         var id = parseInt(this.id);　　　　　　
//         for (var i = 0; i <= id; i++) {　　　　　　　　
//             stars[i].innerHTML = "★";　　　　　　
//         }　　　　　　
//         for (var j = id + 1; j < 5; j++) {　　　　　　　　
//             stars[j].innerHTML = "☆";　　　　　　
//         }　　　　
//     };　　
// }　　 

// //循环载入鼠标点击星星事件
// for (var i = 0; i < stars.length; i++) {　　　　
//     stars[i].onclick = function () {　　　　　　
//         var id = parseInt(this.id);　　　　　　
//         flag = id;　　　　　　
//         for (var i = 0; i <= id; i++) {　　　　　　　　
//             stars[i].innerHTML = "★";　　　　　　
//         }　　　　　　
//         //Expand(); //这里是鼠标点击星星的扩展，例如出现分值之类的，总之要扩展什么随你的大小便啦~
//         　　　　
//     };　　
// }　　 

// //载入鼠标离开div事件
// document.getElementById("stars").onmouseout = function () {　　　　 //如果tag是3，则循环给把0 1 2 3几个星星整黄
//     if (flag >= 0 && flag <= 4) {　　　　　　
//         for (var i = 0; i <= flag; i++) {　　　　　　　　
//             stars[i].innerHTML = "★";　　　　　　
//         }　　　　　　
//         for (var j = flag + 1; j < 5; j++) {　　　　　　　　
//             stars[j].innerHTML = "☆";　　　　　
//         }　　
//     }　　　　 //如果tag没有值或者是初值5，则把所有的星星还原成空星星
//     　　　　
//     else {　　　　　　
//         for (var i = 0; i < stars.length; i++) {　　　　　　　　
//             stars[i].innerHTML = "☆";　　　　　　
//         }　　　　
//     }　　
// };