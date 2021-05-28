
//轮播图图片数据
let carouseDate = [
    {
        img : 'images/banner1.jpg',
    },
    {
        img : 'images/banner2.jpg',
    },
    {
        img : 'images/banner3.jpg',
    },
    {
        img : 'images/banner4.jpg',
    },
    {
        img : 'images/banner5.jpg',
    },
    {
        img : 'images/banner1.jpg',
    },
    {
        img : 'images/banner2.jpg',
    },
    {
        img : 'images/banner3.jpg',
    },
    {
        img : 'images/banner4.jpg',
    },
    {
        img : 'images/banner5.jpg',
    },
]

//使用对象去接收参数
carousel('#banner1',{
    timeS:6000,
    dateImg: carouseDate
})
carousel('#banner2',{
    dateImg: carouseDate
})
carousel('#banner3',{
    dateImg: carouseDate
})
carousel('#banner4',{
    dateImg: carouseDate
})
carousel('#banner5',{
    dateImg: carouseDate
})
carousel('#banner6',{
    dateImg: carouseDate
})
carousel('#banner7',{
    dateImg: carouseDate
})






/*新歌首发tab列表切换*/
function new_song_tab() {
let nav = document.querySelectorAll('.new-song .new-song-list-left .list-text3');
    //列表
let list = document.querySelectorAll('.new-song .new-song-list-left .warp-new-song-list');
// console.log(list)
    for (let i = 0; i < nav.length; i++) {
        nav[0].classList.add('active')//第一个显示高亮
        list[0].classList.add('active')
        //onmouseover
        nav[i].onclick = function () {
            //先删除所有的类名
            for (let i = 0; i < nav.length; i++) {
                nav[i].classList.remove('active')
                list[i].classList.remove('active')
            }
            this.classList.add('active')
            list[i].classList.add('active')
        }

    }


}new_song_tab()

