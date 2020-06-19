function setRem(){
    function resize(){
        //ui原型稿的高度
        let uiWidth = 750
        let uiFontSize = 20
        //计算一下 html 根元素的字体大小
        //获取当前设备的宽度
        let clienWidth = document.documentElement.clientWidth
        // html 的本字体大小是 htmlFontSize
        // clientWidth/htmlFontSize = uiWidth/uiFontSize
        // 411/htmlFontSize = 750 / 20
        // htmlFontSize/411 = 20/750
        // htmlFontSize = 20 *411/750
        let htmlFontSize = uiFontSize * clienWidth / uiWidth
        document.documentElement.style.fontSize = htmlFontSize

    }
    //屏幕大小发生变化 调用函数resize
    window.addEventListener("resize",resize)
    //横屏事件
    window.addEventListener("orientationchange",resize)

}
export default setRem