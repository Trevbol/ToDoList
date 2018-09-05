let arr1,arr2;
arr1=localStorage.arr1?localStorage.arr1.split(","):[];
arr2=localStorage.arr2?localStorage.arr2.split(","):[];

let conbox1=document.querySelector(".conbox1");
let conbox2=document.querySelector(".conbox2");
let input=document.querySelector("#input");
let num1=document.querySelector(".num1");
let num2=document.querySelector(".num2");
// console.log(conbox1, conbox2);
/*let arr1=["html","css","js","jquery"];
let arr2=["456,789"];*/
update()

function update(){
    localStorage.arr1=arr1.join(",");
    localStorage.arr2=arr2.join(",");

    conbox1.innerHTML="";
    conbox2.innerHTML="";
    num1.innerText=arr1.length;
    num2.innerText=arr2.length;
    arr1.forEach(function (item,index) {
        let box=document.createElement("div");
        let input=document.createElement("input");
        input.className="input";
        let p=document.createElement("p");
        let del=document.createElement("div");
        del.className="del";
        p.ondblclick=function(){
            let input=document.createElement("input");
            let text=p.innerText;
            p.innerText="";
            input.value=text;
            input.onblur=function(){
                arr1.splice(index,1,input.value);
                update();
            }
            p.appendChild(input);
            input.focus();
        }
        box.setAttribute("class","box");
        input.setAttribute("type","checkbox");
        p.innerText=item;
        box.appendChild(input);
        box.appendChild(p);
        box.appendChild(del);
        conbox1.appendChild(box);
        input.onclick=function () {
            arr1.splice(index,1);
            arr2.unshift(item);
            update()
        }
        del.onclick=function () {
            arr1.splice(index,1);
            update()
        }
    })

    arr2.forEach(function (item,index) {
        let box=document.createElement("div");
        let input=document.createElement("input");
        input.className="input";
        let p=document.createElement("p");
        let del=document.createElement("div");
        del.className="del";
        box.setAttribute("class","box");
        input.setAttribute("type","checkbox");
        input.setAttribute("checked","checked");
        p.innerText=item;
        p.ondblclick=function(){
            let input=document.createElement("input");
            let text=p.innerText;
            p.innerText="";
            input.value=text;
            input.onblur=function(){
                arr2.splice(index,1,input.value);
                update();
            }
            p.appendChild(input);
            input.focus();
        }
        box.appendChild(input);
        box.appendChild(p);
        box.appendChild(del);
        conbox2.appendChild(box);
        input.onclick=function () {
            arr2.splice(index,1);
            arr1.unshift(item);
            update()
        }
        del.onclick=function () {
            arr2.splice(index,1);
            update()
        }
    })
}

input.onkeydown=function (e) {
    if (e.keyCode==13&&this.value!=""){
        arr1.unshift(this.value);
        this.value="";
        update();
    }
}

/*localStorage.arr="我的数据";*/

