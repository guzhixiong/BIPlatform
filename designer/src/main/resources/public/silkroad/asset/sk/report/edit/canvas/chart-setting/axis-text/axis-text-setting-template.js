define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.indList,f=(b.$ind,b.name,c.$escape),g="";return g+='<!--\r\n数据例子：\r\nvar demoData = {\r\n    indList: {\r\n        click: {\r\n            caption: \'\',\r\n            axisName: \'\'\r\n        }\r\n    }\r\n};\r\n-->\r\n<!-- 指标颜色设置 -->\r\n<div class="dialog-content">\r\n    <div class="base-setting-box c-f j-axis-text-setting">\r\n        <span class="mb-20 f-l">请对坐标轴名字单独设置</span>\r\n        ',d(e,function(a,b){g+='\r\n        <div class="base-setting-item f-l c-f j-axis-text-item">\r\n            <span class="f-l">',g+=f(a.caption),g+='：</span>\r\n            <input class="f-l" type="text" name="',g+=f(b),g+='" value="',g+=f(a.axisName),g+='" placeholder="请不要超过26个字符" />\r\n            <span class="f-l error-msg cor-red j-error-msg hide">字符超过指定长度</span>\r\n        </div>\r\n        '}),g+="\r\n    </div>\r\n</div>\r\n"}return{render:b}});