define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=c.$each,f=(b.$planeTable,b.$index,"");return f+='<!--\n数据例子：\nvar demoData = {\n    "planeTableParamList": [\n        {\n            "text": "表1",\n            "value": "table1"\n        },\n        {\n            "text": "表2",\n            "value": "table2"\n        },\n        {\n            "text": "表3",\n            "value": "table3"\n        }\n    ]\n};\n-->\n<li class="table-link-set-item">\n    <input value="" placeholder="请输入操作列名" data-value="',f+=d(b.operationColumnId),f+='">\n    <select class="right mr-10 j-table-link-set-plane-table">\n        <option value="">请选择平面表</option>\n        ',e(b.planeTableList,function(a){f+='\n        <option value="',f+=d(a.value),f+='">',f+=d(a.text),f+="</option>\n        "}),f+='\n    </select>\n    <span type="button" class="form-common-input-button f-l hide j-next">设置参数</span>\n    <span class="biplt-radius biplt-radius-red biplt-del mt-3 ml-5 f-l c-p j-del" title="删除" data-status="add">\n        <span></span>\n    </span>\n</li>'}return{render:b}});