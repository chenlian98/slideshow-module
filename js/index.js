
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



