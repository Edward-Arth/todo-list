(()=>{"use strict";const e=document.getElementById("taskForm"),t=(document.getElementById("taskSubmit"),(e,t,n,l)=>({title:e,description:t,dueDate:n,priority:l}));function n(n){const l=document.querySelector("#taskID").value,d=document.querySelector("#descriptionID").value,c=document.querySelector("#dueDateID").value,s=document.querySelector('input[name="priority"]:checked').value;!function(e,t){let n=document.createElement("div");t.appendChild(n);let l=document.createElement("div");n.appendChild(l),l.textContent=e.title;let d=document.createElement("div");n.appendChild(d),d.textContent=e.dueDate;let c=document.createElement("div");n.appendChild(c),c.textContent=e.priority}(t(l,d,c,s),n),e.style.display="none",e.reset()}!function(){const e=[],t=document.getElementById("sidebar"),l=document.getElementById("projectForm"),d=document.getElementById("projectCancel"),c=document.getElementById("projectSubmit"),s=document.getElementById("taskForm"),o=document.getElementById("taskCancel"),i=document.getElementById("taskSubmit");(()=>{const e=document.createElement("button");e.id="newProject",e.textContent="Create new project",t.appendChild(e),e.addEventListener("click",(()=>{s.style.display="none",s.reset(),l.style.display="block"}))})(),d.addEventListener("click",(()=>{l.style.display="none",l.reset()})),o.addEventListener("click",(()=>{s.style.display="none",s.reset()})),c.addEventListener("click",(function(t){let d=document.querySelector("#projectName").value;t.preventDefault(),e.push(d),function(){let t=e.slice(-1),d=document.getElementById("projectList"),c=document.createElement("li");d.appendChild(c),c.textContent=t,c.classList.add(t);let o=document.getElementById("projectDisplay"),a=document.createElement("div");o.appendChild(a),a.classList.add(t),a.style.display="none",function(e){const t=document.createElement("button");t.classList.add("newTaskButtons"),e.appendChild(t),t.textContent="Add new task",t.addEventListener("click",(()=>{l.style.display="none",l.reset(),s.style.display="block"}))}(a);let m=document.createElement("div");m.id="taskList",m.classList.add(t),a.appendChild(m),i.addEventListener("click",(function(e){e.preventDefault(),n(function(){let e=o.children;for(let t=0;t<e.length;t++)if("block"===e[t].style.display)return document.getElementsByClassName(e[t].className).namedItem("taskList")}())}),!1),c.addEventListener("click",(()=>{let e=o.children;for(let t=0;t<e.length;t++)e[t].style.display="none";let t=c.className,n=document.getElementsByClassName(t);for(let e=0;e<n.length;e++)n[e].style.display="block"}))}(),l.style.display="none",l.reset()}),!1)}()})();