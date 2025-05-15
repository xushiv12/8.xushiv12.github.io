// mychatapi.js
const MyChatAPI = {
  send:function(){
    let a=prompt("请输入消息");
    let b=prompt("请输入ID");
    const form = document.createElement("form");
    form.method = "POST";  
    form.action = "http://t.xushi-1009.cc:1020"; 
    const input = document.createElement("input");
    input.type = "hidden";  
    input.name = "a"; 
    input.value=a;
    const inpu = document.createElement("input");
    inpu.type = "hidden";  
    inpu.name = "b"; 
    inpu.value=b;
    form.appendChild(input);
    form.appendChild(inpu);
    document.body.appendChild(form);
    form.submit(); // 自动提交表单
  }
};

window.MyChatAPI = MyChatAPI; // 挂载到 window 全局对象
