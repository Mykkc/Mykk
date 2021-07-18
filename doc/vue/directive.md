# 自定义指令
### 自定义拖拽
::: details 自定义拖拽

```vue
Vue.directive('drag',{ 
    bind: function (el) {
        const getAttr = (obj, key) => (
            obj.currentStyle
            ? obj.currentStyle[key]
            : window.getComputedStyle(obj, false)[key]
          );
        //获取当前元素
        let odiv = el;   
        odiv.onmousedown = (e) => {
            //算出鼠标相对元素的位置
            const currentX = e.clientX;
            const currentY = e.clientY
            const left = parseInt(getAttr(odiv, 'left'));
            const top = parseInt(getAttr(odiv, 'top'));
            document.onmousemove = (e)=>{
                // 鼠标移动时计算每次移动的距离，并改变拖拽元素的定位
                const disX = e.clientX - currentX;
                const disY = e.clientY - currentY;
                odiv.style.left = `${left + disX}px`;
                odiv.style.top = `${top + disY}px`;
                // 阻止事件的默认行为，可以解决选中文本的时候拖不动
                return false
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
        odiv.ontouchstart = (e) => {
            // 移动端touch
            let touches = e.touches[0];
            //算出鼠标相对元素的位置
            const currentX = touches.clientX;
            const currentY = touches.clientY
            const left = parseInt(getAttr(odiv, 'left'));
            const top = parseInt(getAttr(odiv, 'top'));
            document.ontouchmove = (e)=>{

                let event = e.touches[0];
                // 鼠标移动时计算每次移动的距离，并改变拖拽元素的定位
                const disX = event.clientX - currentX;
                const disY = event.clientY - currentY;
                odiv.style.left = `${left + disX}px`;
                odiv.style.top = `${top + disY}px`;
            };
            document.ontouchend = (e) => {
                document.ontouchmove = null;
                document.ontouchend = null;
            };
        };
    }
  }
);
```

:::