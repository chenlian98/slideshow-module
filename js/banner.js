function carousel(ele,group) { //ele ID选择器  group 定义个组合得对象,里面再传入很多属性
    let banner = document.querySelector(ele);//获得最大得父亲容器
    let timeS = group.timeS  || 4000 //你传值了就是你传入得值 如果不传就是默认值 4000
    let dateImg = group.dateImg  || [] //你的图片默认是你传入得图片 或者是 空得
     if(dateImg.length === 0) { //当你不传入图片得时候就是会报错
         throw new Error('error 请您传入图片得参数')
     }
    let banner_wrap = document.createElement('div');  //创建 banner 容器
    banner_wrap.className  = 'banner-wrap';  // 增加一个类名 banner-wrap
    let w = banner.offsetWidth //获得大盒子得宽度
    banner_wrap.style.width = w * dateImg.length + 'px'  //计算容器得宽度 = 大盒子宽 * 图片的长度 + 'px'
    banner.append(banner_wrap) //把banner_wrap 从最大得父亲容器插入
    let dot_box = document.createElement('div') //创建点点容器
    banner.append(dot_box) //插入点点容器标签
    dot_box.className = 'dot' //给小点点增加一个类名 dot
    dateImg.forEach(function (item,index){  //使用 forEach 遍历数据
        let imgs = document.createElement('a');      //创建图片
        imgs.setAttribute('href','javascript:void(0)')   //设置属性
        imgs.style.backgroundImage = `url(${item.img})`; //设置图片地址
        imgs.style.width = w + 'px' // 给图片设置宽度
        banner_wrap.append(imgs) // banner_wrap里面插入a(图标) 标签
        let dot = document.createElement('a') //创建点点
        dot.setAttribute('href','javascript:void(0)')//设置属性
        dot_box.append(dot)//从点点父亲容器插入进去
    })
    //创建左右箭头
    let arrow_left = document.createElement('div')    //创建左箭头
    arrow_left.className = 'small-arrow-left arrow' //增加类名
    banner.append(arrow_left)  // 从父容器插入左箭头
    let arrow_right = document.createElement('div') //创建右箭头
    arrow_right.className = 'small-arrow-right arrow' //增加类名
    banner.append(arrow_right) //从父容器插入右箭头
    let images = banner_wrap.children //获得所有图片
    let dots = dot_box.children //获得所有的小点点

    //定义播放得函数
    let index = 0; //定义图片从第几张开始
    function autoPlay(flag = false , dotIndex = index) {  // dotIndex 点点得下标  默认得给赋值 为 0
        if (flag) {
            index -= 1  //左箭头 index = index - 1
            if(index < 0){ //当 index < 0 就给它把 index 重新赋值为 images.length - 1
                index = images.length - 1
            }
        }else {
            index += 1  //右箭头 index = index + 1
            if(index >= images.length){ //当 index >= images.length index重新赋值为 0
                index = 0
            }
        }
        let count = -w * dotIndex //动态改变 计算marginLeft
        banner_wrap.style.marginLeft = count + 'px'; //让图片动起来
        for (let i = 0; i < dots.length; i++){
            dots[i].classList.remove('active') //先遍历 然后移出所有的点点的类名
        }
        dots[dotIndex].classList.add('active') //对应的图片显示是谁，它就再谁身上增加点点的类名
    }
//开启定时器
    let timer = setInterval(function (){ autoPlay()  },timeS)
//移入上暂停定时器
    banner.addEventListener('mouseenter',function (){
        clearInterval(timer) //清除它
    })
//移出得时候继续开始动
    banner.addEventListener('mouseleave',function (){
        timer = setInterval(autoPlay ,timeS) //重新走一边定时器
    })
//左箭头
    arrow_left.addEventListener('click',function (){
        autoPlay(true) //传入 true 就会执行 index -= 1
    })
//右箭头
    arrow_right.addEventListener('click',function (){
        autoPlay() //调用 autoPlay方法
    })

//点点
    dots[0].classList.add('active') //第一个点点显示
    for (let i = 0; i < dots.length; i++) { //遍历点点
        dots[i].addEventListener('click', function () {
            autoPlay(false,i)  //传入 false 并且传入下标，这样再点击的时候 点点就知道你点击的是那个图片
        })
    }
}

 //回到首页
function gundong() {
    /*返回顶部按钮*/
    let btn = document.querySelector('.btn2');
    document.documentElement.onscroll = document.body.onscroll = function () { //增加滚动事件
        // code
        if(document.documentElement.scrollTop > 400) {    //滚动条高度 大于 400 出现 回到首页的箭头
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    }
}gundong()


