// Add Framework
window.iReadyFramework={utils:{},ui:{},cookieUtil:{},hook:{},lesson:{csidTypes:{}},routes:{}},window.url=window.location.href,iReadyFramework.user=dashboardJson,iReadyFramework.utils.iReadyURL="https://login.i-ready.com/student/dashboard/home",iReadyFramework.utils.dragElement=e=>{var t=0,o=0,s=0,r=0;function n(e){(e=e||window.event).preventDefault(),s=e.clientX,r=e.clientY,document.onmouseup=l,document.onmousemove=a}function a(n){(n=n||window.event).preventDefault(),t=s-n.clientX,o=r-n.clientY,s=n.clientX,r=n.clientY,e.style.top=e.offsetTop-o+"px",e.style.left=e.offsetLeft-t+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=n:e.onmousedown=n},iReadyFramework.utils.addScript=scriptURL=>fetch(scriptURL).then((e=>e.text())).then((r=>eval(r))),iReadyFramework.utils.goToDashboard=()=>goto("/student/dashboard/home/"),iReadyFramework.utils.isType=e=>Object.prototype.toString.call(e).slice(8,-1),iReadyFramework.utils.delDuplicates=e=>[...new Set(e)],iReadyFramework.utils.isNull=e=>null==e,iReadyFramework.utils.copyToClipboard=e=>navigator.clipboard.writeText(e),iReadyFramework.utils.randomNumberInRange=(e=0,t=100)=>Math.floor(Math.random()*(t-e+1))+e,iReadyFramework.utils.toggleElementDisplay=e=>e.style.display="none"===e.style.display?"block":"none",iReadyFramework.utils.appendScript=e=>{document.body.appendChild(Object.assign(document.createElement("script"),{src:e,onerror:console.error}))},iReadyFramework.ui.closeModal=()=>{goto("/student/dashboard/home/"),clearInterval(interval)},iReadyFramework.ui.getModal=()=>document.getElementsByClassName("css-1w7vrn4 enj526p0")[0],iReadyFramework.ui.openTempModal=()=>goto("/student/error/lockDownBrowserLoader"),iReadyFramework.ui.openModal=(e,t,o,s)=>{iReadyFramework.ui.openTempModal();setInterval((function(){try{null!=iReadyFramework.ui.getModal().innerText&&(!0?(document.getElementsByClassName("css-1w7vrn4 enj526p0")[0].innerHTML=e,document.getElementsByClassName("css-msv3yz enj526p0")[0].innerHTML=t,document.getElementById("continue-button-button").onclick=o):(document.getElementsByClassName("css-1w7vrn4 enj526p0")[0].innerText=e,document.getElementsByClassName("css-msv3yz enj526p0")[0].innerText=t,document.getElementById("continue-button-button").onclick=o))}catch(e){}}),10)},iReadyFramework.cookieUtil.setCookie=(e,t,o)=>{var s="";if(o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3),s="; expires="+r.toUTCString()}document.cookie=e+"="+(t||"")+s+"; path=/"},iReadyFramework.cookieUtil.getCookie=e=>{for(var t=e+"=",o=document.cookie.split(";"),s=0;s<o.length;s++){for(var r=o[s];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},iReadyFramework.hook.hookObj=(e,t)=>{window[e]=t},iReadyFramework.hook.exposeObj=e=>{debug(e),e()},iReadyFramework.hook.createHook=(e,t,o)=>{let s=e[t];e[t]=function(...e){let t=s.apply(this,e);return t&&"function"==typeof t.then?t.then((t=>(o([t,e]),t))):(o([t,e]),t)}},iReadyFramework.lesson.isOpen=()=>(window.html5Iframe,!1),iReadyFramework.lesson.frame=()=>html5Iframe.contentWindow,iReadyFramework.lesson.env=()=>html5Iframe.contentWindow.env,iReadyFramework.lesson.csid=()=>html5Iframe.src.split("csid=")[1].split("&type")[0],iReadyFramework.lesson.subject=()=>html5Iframe.src.split("csid=")[1].split("&type")[0].split("DI.")[1].split(".")[0],iReadyFramework.lesson.data=()=>html5Iframe.contentWindow.com.cainc.ifabric.lessonReport.collectReportData(),iReadyFramework.lesson.part=()=>html5Iframe.src.split("&type=")[1].split("#")[0],iReadyFramework.lesson.csidTypes.ela={PhonologicalAwareness:"DI.ELA.PA",Phonics:"DI.ELA.PH",HighFrequencyWords:"DI.ELA.HFW",Vocabulary:"DI.ELA.VOC",ComprehensionLiterature:"DI.ELA.COM.LIT",ComprehensionInformationalText:"DI.ELA.COM.INFO"},iReadyFramework.lesson.csidTypes.math={NumberAndOperations:"DI.MATH.NO",AlgebraAndAlgebraicThinking:"DI.MATH.AL",MeasurementAndData:"DI.MATH.MS",Geometry:"DI.MATH.GEO"},iReadyFramework.lesson.cheatStore={getCheat:function(e){iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}");return JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))[e]},setCheat:function(e,t){iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}");const o=JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"));o[e]=t,iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",JSON.stringify(o))},get getAll(){return iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}"),JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))},clear:function(){html5Iframe.contentWindow.localStorage.clear()},refresh:function(){html5Iframe.contentWindow.document.getElementById("settings-gear").click(),html5Iframe.contentWindow.document.getElementById("cancelBtn").click()}},iReadyFramework.routes={"@@ROUTER@@/":"/","@@ROUTER@@/login":"/login","@@ROUTER@@/login/assistance":"/login/assistance","@@ROUTER@@/login/blacklistedmessage":"/login/blacklistedmessage","@@ROUTER@@/login/clever/error/:status?":"/login/clever/error/:status?","@@ROUTER@@/login/clever/error/S612":"/login/clever/error/S612","@@ROUTER@@/login/educatorIOS13GrayListed":"/login/educatorIOS13GrayListed","@@ROUTER@@/login/error/:status?":"/login/error/:status?","@@ROUTER@@/login/k1":"/login/k1","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?":"/login/k1/class/:classCode/letter/:letter?","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?/student/:studentId":"/login/k1/class/:classCode/letter/:letter?/student/:studentId","@@ROUTER@@/login/k1/class/:classCode/selectLetter":"/login/k1/class/:classCode/selectLetter","@@ROUTER@@/login/login_interstitial":"/login/login_interstitial","@@ROUTER@@/login/login_interstitial_main":"/login/login_interstitial_main","@@ROUTER@@/login/oneroster/error/:status?":"/login/oneroster/error/:status?","@@ROUTER@@/login/oneroster/error/S612":"/login/oneroster/error/S612","@@ROUTER@@/login/passwordexpiredmessage":"/login/passwordexpiredmessage","@@ROUTER@@/login/resetemail":"/login/resetemail","@@ROUTER@@/login/resetpassword/:token":"/login/resetpassword/:token","@@ROUTER@@/login/resetpassword/invalidtoken":"/login/resetpassword/invalidtoken","@@ROUTER@@/login/sso/error/:status?":"/login/sso/error/:status?","@@ROUTER@@/login/sso/error/S612":"/login/sso/error/S612","@@ROUTER@@/login/support":"/login/support","@@ROUTER@@/student":"/student","@@ROUTER@@/student/ActivityLaunchPage":"/student/ActivityLaunchPage","@@ROUTER@@/student/assessment/completed/:assessmentType/:score?":"/student/assessment/completed/:assessmentType/:score?","@@ROUTER@@/student/book":"/student/book","@@ROUTER@@/student/dashboard/assessment/lockdownbrowser/:subject?":"/student/dashboard/assessment/lockdownbrowser/:subject?","@@ROUTER@@/student/dashboard/home":"/student/dashboard/home","@@ROUTER@@/student/dashboard/ssolaunch/:ssotype?":"/student/dashboard/ssolaunch/:ssotype?","@@ROUTER@@/student/error/:errorReason?":"/student/error/:errorReason?","@@ROUTER@@/student/gameLauncherPage":"/student/gameLauncherPage","@@ROUTER@@/student/learningGamePlayerPage":"/student/learningGamePlayerPage","@@ROUTER@@/student/lesson/completed/:isPassingScore/:score?":"/student/lesson/completed/:isPassingScore/:score?","@@ROUTER@@/student/lesson/paused":"/student/lesson/paused","@@ROUTER@@/student/lockDownBrowserLoader":"/student/lockDownBrowserLoader","@@ROUTER@@/student/mathFluencyPlayerPage":"/student/mathFluencyPlayerPage"};

// Utils
let injectionError = () => iReadyFramework.ui.openModal('Error', 'You injected after opening a lesson.', location.reload);

// Variables
const github = "https://raw.githubusercontent.com/flowingsalt/Refine/main/";
const iReadyVer = "release-13.5.x/2";
const UI = document.createElement("div");
UI.innerHTML = `<div id="mainnullify"></div>`
let asked_time = 0;
let welcomeModalSeen = false;
let timer_interval;
let time;
let timeout_error;
let activated;
let activatedgames = false;
let backgroundprompt;
let nameprompt;
let interval;
let currentName = document.getElementsByClassName("css-1ii68kw e15psnz1")[0].innerText;

//links
const links = {
    "app24" : github + "app-24.chunk.js",
    "app21" : github + "app-21.chunk.js",
    "app24OG" : "https://cdn.i-ready.com/instruction/student-dashboard/" + iReadyVer + "/static/js/app-24.chunk.js"
};

// module names
const moduleNames = {
    "minfarm" : 'Minute Farmer',
    "farmer_id" : document.getElementById('i-Ready-Farmer')
};

// times minutes
timer_interval = setInterval(function(){
    if (activated == true) {
        asked_time++;
        setTextStop()
        if(asked_time == time){
            p2()
            setTextStart()
            asked_time = 0
            let timeout_alert = setTimeout(stop_alert, 3000)
        }
    }
}, 60000)


//add hooks
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null) {
    fetch(links.app24).then(r => r.text()).then(r => eval(r));
    fetch(links.app21).then(r => r.text()).then(r => eval(r));
} else {
    injectionError(), welcomeModalOpen = true;
}

//skipper
window.yes = function() {
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null && window['lessonBridge'] === undefined || window['lessonBridge'] === null || document.querySelector("#lesson-splash-objectives-button") != null) { 
        alert('Please (FULLY) open a lesson.');
    } else {
        lessonBridge.start();
        p1.completeLessonComponent(iReadyFramework.lesson.csid(), { score: prompt('What score would you like?') });

    }
}

//welcome screen
let welcomeModalOpen = () => {
    window.protectedClose = function() { try { iReadyFramework.ui.closeModal() } catch (e) {} };
    window.welcomeModal = {}
    window.welcomeModal.title = '<div class="css-1w7vrn4 enj526p0">Nullify 3.0</div>' // title of the modal
    window.welcomeModal.description = '<div class="css-msv3yz enj526p0">Update log: <br> - New Lesson Skipper <br> - New Minutes Farmer <br> - Theme Manager (you can pick your panel theme!)</div>' // description of the modal
    window.welcomeModal.modal = iReadyFramework.ui.openModal(welcomeModal.title, welcomeModal.description, protectedClose, true)
}
if (welcomeModalSeen == false) {
    welcomeModalOpen()
    welcomeModalSeen = true
}

function setTextStop(){
    document.getElementById('i-Ready-Farmer').textContent = ("Farmed: " + asked_time + " (Click To Stop)")
    document.getElementById('i-Ready-Farmer').onclick = stop_farmer
}

function setTextStart(){
    document.getElementById('i-Ready-Farmer').textContent = moduleNames.minfarm
    document.getElementById('i-Ready-Farmer').onclick = minFarmer
}

function minFarmer(){
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null && window['lessonBridge'] === undefined || window['lessonBridge'] === null || document.querySelector("#lesson-splash-objectives-button") != null) { 
        alert('Please (FULLY) open a lesson.');
    }
    else{
            time = prompt("How many minutes do you want?"); // gets how many minutes user wants
            activated = true
            alert('Farmer has started, do NOT exit out of this tab or you minutes WILL NOT SAVE, You may go off tab or off window or afk. When you want to stop the minute farmer, click stop or else your minutes will not save.') // sends alert
            lessonBridge.start() // add hooks
            p1.returnToDashboardHome() // return to Dashboard
            p3() // start lesson serverside
            setTextStop()
        }
    }

function stop_alert(){
    alert("Farmer finished, Succesfully earned " + time + " minutes. (i-ready will reload now.)");
    location.reload()
}

function stop_farmer(){
    p2();
    alert("Farmer finished, Succesfully earned " + asked_time + " minutes.")
    location.reload()
    setTextStart()
    asked_time = 0
    clearInterval(timer_interval);
}
function open_tutorial(){
    let confirmation = confirm('This button will send you to a YouTube link on how to use Nullify. If you want to proceed, click OK.')
    switch(confirmation){
        case true:
            open("https://youtu.be/_jvn1E9D8uw")
            break;
    }
}

function open_discord(){
    open('https://discord.gg/nullify')
}

function open_misc() {
    if (document.querySelector("#misclauncher").style.display == "grid") {
        document.querySelector("#misclauncher").style.display = "none"
    } else {
        document.querySelector("#misclauncher").style.display = "grid"
    }
}

function changeToTheme(theme) {
    function changeAllChildrenTo(color) {
        document.getElementsByClassName("Launcher").forEach((e) => {
            e.style.outline = color;
        });
    }
    window.localStorage.setItem('theme', theme);
    switch(theme) {
        case 'default':
            document.querySelector('#bruh').innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');.title {font-family: 'Nunito', sans-serif;font-size: 30px;color: white }.bottomTitle {font-family: 'Nunito', sans-serif;font-size: 15px;margin-top: -0.7rem;}.button {font-family: 'Nunito', sans-serif;border: none;color: white;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: white;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("gray solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEVHcEw5OTk6OjpdXV1OTk44ODg6Ojo6Ojo4ODhLS0tcXFxcXFw6Ojo6OjpPT085OTk7OztbW1taWlpdXV1aWlo6OjpcXFw4ODg4ODhISEhcXFxcXFxcXFxbW1tcXFxcXFw6OjpcXFxbW1s7Ozs8PDw4ODg3Nzc3NzdcXFxdXV08PDw8PDxdXV05OTk8PDywq9ZkAAAALHRSTlMAVvqlBCpRQzYLWu/jOxHtiEAY20fbK5rmHpT56Gm4gpTL0WTFs0xyjnWm9agsVPsAAAC6SURBVCjPrdLZEkMwGIbhkEQEse873Vvc/+U1gk4ZDjrT9/B7xn8iAMy5Gsy91EFgVVg1WSfSoWbOI3VSr/suKwuX71re7dT6gLg+1NdrDrWEgT6uCXXuyzW9LELE7GAAPc+ICA0fTddWPkWErzwBPIubCRCpjWFqgdEYW9Y19JIy/ArkAJT/wfUIVPUb5H2Qj7+I98ECVLrIW5DPJ/F/k1sgAGMxGzb+PAbEImuC15NsHgo/ifF8YuwNDTNKUtRpX3AAAAAASUVORK5CYII="
            break;
        case 'red':
            document.querySelector('#bruh').innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');.title {font-family: 'Nunito', sans-serif;font-size: 30px;color: #b10000 }.bottomTitle {font-family: 'Nunito', sans-serif;font-size: 15px;margin-top: -0.7rem;color: #b10000 }.button {font-family: 'Nunito', sans-serif;border: none;color: #b10000;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: #b10000;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("#b10000 solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALFQTFRFAAAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAsQAAoZnSfAAAADt0Uk5TABJOHAIteMP7//0KRpLfBmKu8fKrXceLk9B5hYal6Zr+lN5c2WNe+eEquvrPvpiq9krafmXEoDqJuZUTvqvNAAAAzElEQVR4nI2SyRKCMBBEA7JFoggaIOKCgOCO+/b/H6bEIsSUqbIvk+5X6csMAEyKqraAKE03TAvCtmnoWpPaqNOFTN0OcmhBz/WgoP4AK0D1LTGvUABCEgzdPh9afjQaT8AUwphEw1lCw3YyS9PxuzuuQKUsmkfmINexW1DPwFsLY7kqasMDSHDzXv8FMg58VW1yCdhKgaxKClYpD3YyIP0R/gYFcNRyX4NDHR9PdPvK+UJtiejwrrdm78v75APWD2wLd4Kuzxsx2AG9AAN0HMkV5BWqAAAAAElFTkSuQmCC"
            break;
        case 'purple':
            document.querySelector("#bruh").innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');.title {font-family: 'Nunito', sans-serif;font-size: 30px;color: #4446b5 }.bottomTitle {font-family: 'Nunito', sans-serif;font-size: 15px;margin-top: -0.7rem;color: #4446b5 }.button {font-family: 'Nunito', sans-serif;border: none;color: #4446b5;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: #4446b5;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("#1d264d solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA4VBMVEVHcEyQj6Osqbudmq1ran5cW3SurLg4OFZJSGLCv8jZ0+CNiqK+usVSUmtJSWW1s7/QyNtmY4s5OFdaWYFMTHmlmqzKxtFtbH6CgZ7HusdkY4lZWXJcW4RGRnN5d5fFw89uboF1c5S+vMhsa4jCwdB1c4ignK5qao1wb4K5t8FMS2VDQlxQTmeAgJFTUmyXlqNWVm9cXHFaWXHNzdiyscNQTmrFv8tsaYBxcJNPUHthYHaTlKp6eovHxcyKiJdcWYIZGT0XFzklJl4bGz4oKV8fH0E4OGovL0wwMGMkJEQrLGD0bQBdAAAAP3RSTlMAhU5dutBd/ppcEnhGvvleLcP68vsCHKqUBt7Z3/2SCpOrKq55pYvHoDrp9ph+2mXPxOFjRvGG6a7xuWKJSpV6Yxf0AAAA5ElEQVQoz5XS5w6CMBhA0QKCMmQIblDBvfceYSng+z+QFhWUqNH78ztpm7QFIIhC0QyIluZpQbJtRaD5dDgtz0ryybx3kktM3t9gW12fzZdcUcUogDYl24zmig1QwRu1leiGw7PURBb1JUgYRhxHarkCPMVWCjmSrM89PQ7hmlNEpoigcjxRZY/6tQdAm9BajLX0W09gGDimB6V+giIRwstWI+4DJD8C8S/ESOsJem/B+rKicnwLLMij2e4D9nfwBn3/9anh2IGQZeDFWvNWO3x3bdfxfEhtsHLknzCtQxungw90AcziZRzDdJaqAAAAAElFTkSuQmCC"
            break;
        case 'blue':
            document.querySelector("#bruh").innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');.title {font-family: 'Nunito', sans-serif;font-size: 30px;color: #0540d5 }.bottomTitle {font-family: 'Nunito', sans-serif;font-size: 15px;margin-top: -0.7rem;color: #0540d5 }.button {font-family: 'Nunito', sans-serif;border: none;color: #0540d5;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: #0540d5;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("#0032b0 solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALFQTFRFAAAAADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwADKwqhc5RgAAADt0Uk5TABJOHAIteMP7//0KRpLfBmKu8fKrXceLk9B5hYal6Zr+lN5c2WNe+eEquvrPvpiq9krafmXEoDqJuZUTvqvNAAAAzElEQVR4nI2SyRKCMBBEA7JFoggaIOKCgOCO+/b/H6bEIsSUqbIvk+5X6csMAEyKqraAKE03TAvCtmnoWpPaqNOFTN0OcmhBz/WgoP4AK0D1LTGvUABCEgzdPh9afjQaT8AUwphEw1lCw3YyS9PxuzuuQKUsmkfmINexW1DPwFsLY7kqasMDSHDzXv8FMg58VW1yCdhKgaxKClYpD3YyIP0R/gYFcNRyX4NDHR9PdPvK+UJtiejwrrdm78v75APWD2wLd4Kuzxsx2AG9AAN0HMkV5BWqAAAAAElFTkSuQmCC"
            break;
        case 'green':
            document.querySelector("#bruh").innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');.title {font-family: 'Nunito', sans-serif;font-size: 30px;color: green }.bottomTitle {font-family: 'Nunito', sans-serif;font-size: 15px;margin-top: -0.7rem;color: green }.button {font-family: 'Nunito', sans-serif;border: none;color: green;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: green;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("#146c18 solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALFQTFRFAAAAFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYFGwYMdFJvwAAADt0Uk5TABJOHAIteMP7//0KRpLfBmKu8fKrXceLk9B5hYal6Zr+lN5c2WNe+eEquvrPvpiq9krafmXEoDqJuZUTvqvNAAAAzElEQVR4nI2SyRKCMBBEA7JFoggaIOKCgOCO+/b/H6bEIsSUqbIvk+5X6csMAEyKqraAKE03TAvCtmnoWpPaqNOFTN0OcmhBz/WgoP4AK0D1LTGvUABCEgzdPh9afjQaT8AUwphEw1lCw3YyS9PxuzuuQKUsmkfmINexW1DPwFsLY7kqasMDSHDzXv8FMg58VW1yCdhKgaxKClYpD3YyIP0R/gYFcNRyX4NDHR9PdPvK+UJtiejwrrdm78v75APWD2wLd4Kuzxsx2AG9AAN0HMkV5BWqAAAAAElFTkSuQmCC"
            break;
        case 'cherryblossom':
            document.querySelector("#bruh").innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');.title {font-family: 'Tilt Neon', sans-serif;font-size: 30px;color: pink }.bottomTitle {font-family: 'Tilt Neon', sans-serif;font-size: 15px;margin-top: -0.7rem;color: pink }.button {font-family: 'Tilt Neon', sans-serif;border: none;color: white;text-align: center;font-size: 16px;cursor: pointer;-webkit-transition-duration: 0.4s;transition-duration: 0.4s;width: 100%;text-align: center;color: pink;background-color: black;}.button:hover {color: black;background-color: grey }.button:active {background-color: black;}.center {display: block;margin-left: auto;margin-right: auto;}"
            changeAllChildrenTo("#ffb7c5 solid 2px")
            document.querySelector("#nullicon").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALFQTFRFAAAA/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fF/7fFIsQGVgAAADt0Uk5TABJOHAIteMP7//0KRpLfBmKu8fKrXceLk9B5hYal6Zr+lN5c2WNe+eEquvrPvpiq9krafmXEoDqJuZUTvqvNAAAAzElEQVR4nI2SyRKCMBBEA7JFoggaIOKCgOCO+/b/H6bEIsSUqbIvk+5X6csMAEyKqraAKE03TAvCtmnoWpPaqNOFTN0OcmhBz/WgoP4AK0D1LTGvUABCEgzdPh9afjQaT8AUwphEw1lCw3YyS9PxuzuuQKUsmkfmINexW1DPwFsLY7kqasMDSHDzXv8FMg58VW1yCdhKgaxKClYpD3YyIP0R/gYFcNRyX4NDHR9PdPvK+UJtiejwrrdm78v75APWD2wLd4Kuzxsx2AG9AAN0HMkV5BWqAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII="
            break;
    }
}

function themes() {
    if (document.querySelector("#themeslauncher").style.display == "grid") {
        document.querySelector("#themeslauncher").style.display = "none"
    } else {
        document.querySelector("#themeslauncher").style.display = "grid"
    }
}

function changeName() {
    nameprompt = prompt('What name do you want?'); // prompts user with what name they want

    if (nameprompt === undefined || nameprompt === null) { // cancels if prompt is canceled
        console.log('Canceled.');
    } else { // grabs prompted name and replaces iready name every millisecond
        setInterval(function () { try{document.getElementsByClassName('css-1ii68kw e15psnz1')[0].innerHTML = nameprompt }catch(e){} }, 1);
    }
}

function freeGames() {
    //bruh so mwessy
    const spans = {
        "createspan0" : document.createElement('span'),
        "createspan1" : document.createElement('span'),
        "createspan2" : document.createElement('span'),
        "createspan3" : document.createElement('span'),
        "createspan4" : document.createElement('span'),
        "createspan5" : document.createElement('span')
    
    };
    
    let games_cards = ['AW-BeGooped', 'AW-Cat_Stacker', 'AW-Path_Spinners', 'AW-Galaxy_Sprint', 'AW-Wizard_Pinball', 'AW-Dig_Site']
    let class_nodes = 'node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-grid css-11qrkq2 evuck0s0'
    
    // modified html
    spans.createspan0.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="bemod"><button type="button" variant="link" tabindex="0" id="game_button0" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Be Gooped game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="BeGooped_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">BeGooped</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_begooped_x2.3d458607.jpg" class="css-nfnchv e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    spans.createspan1.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="catmod"><button type="button" variant="link" tabindex="0" id="game_button1" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Cat Stacker game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Cat Stacker_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Cat Stacker</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_cat_x2.02b35ea5.jpg" class="css-ls98gd e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    spans.createspan2.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="pathmod"><button type="button" variant="link" tabindex="0" id="game_button2" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Path Spinners game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Path Spinners_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Path Spinners</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_path_x2.74a3a2bb.jpg" class="css-1j7w9ly e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    spans.createspan3.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="galaxymod"><button type="button" variant="link" tabindex="0" id="game_button3" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Galaxy Sprint game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Galaxy Sprint_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Galaxy Sprint</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_runner_x2.9d4ae1a4.jpg" class="css-24s8u1 e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    spans.createspan4.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="wizardmod"><button type="button" variant="link" tabindex="0" id="game_button4" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Wizard Pinball game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Wizard Pinball_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Wizard Pinball</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_wizard_x2.fdb4c4fa.jpg" class="css-ckeygk e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    spans.createspan5.innerHTML = `<span class="audiowrapper  css-yx362w ecwdchm0" id="digmod"><button type="button" variant="link" tabindex="0" id="game_button5" audiostate="STOPPED" class="embu0a00 css-npot0f btn btn-link" aria-label="Dig Site game 50 Coins"><div class="css-bni2pa eny8iue0" style="flex: 1 1 0%;"><div id="Dig Site_card" class="e506b522 embu0a00 css-p7wppz node_modules--cainc-cauliflower-src-components-card-___Card__card bg-default"><header variant="default" class="e506b522-card-header embu0a00 css-9q55v2 card-header"><div class="css-j72rc6 enj526p0">Dig Site</div></header><div src="https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/media/rewards_digger_x2.5c2831c2.jpg" class="css-qzwvwv e506b523"><div class="css-j7lah4 e506b521"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="14.99" cy="15.05" r="11.99" fill="#f4d7a4"></circle><path d="M18.19,6.26A12,12,0,0,0,8.26,25,12,12,0,0,0,24.92,8.32,12,12,0,0,0,18.19,6.26Z" fill="#f2c32c"></path><circle cx="14.99" cy="15.05" r="8.4" fill="none" stroke="#d29a00" stroke-miterlimit="10" stroke-width="1.6"></circle><circle cx="15.01" cy="14.95" r="11.99" fill="none" stroke="#505050" stroke-linecap="round" stroke-linejoin="round"></circle></svg> 0</div></div></div></div></button></span>`
    
    setInterval(function() {
        try
        {
            // deletes existing game cards
            for(x = 0; x < 6; x++){
                document.getElementById(games_cards[x]).remove();
            }
    
            // appends
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan0);
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan1);
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan2);
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan3);
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan4);
            document.getElementsByClassName(class_nodes)[0].appendChild(spans.createspan5);
        
            // click listeners
            document.getElementById('bemod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/game-begooped/1.3.x/2/', '_blank'); })
            document.getElementById('catmod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/game-catstacker/1.6.x/2/', '_blank'); })
            document.getElementById('pathmod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/game-hpr/1.4.x/2/', '_blank'); })
            document.getElementById('galaxymod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-lanerunner/', '_blank'); })
            document.getElementById('wizardmod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-bubbles/', '_blank'); })
            document.getElementById('digmod').addEventListener('click', function() { window.open('https://cdn.i-ready.com/instruction/reward-games/v1.3.x/2/game-minedigger/', '_blank'); })
        }
        catch(e){}
    }, 1);
}

function changeBackground() {
    backgroundprompt = prompt('What background do you want? Put in a url'); // prompts user with what background they want

    if (backgroundprompt === undefined || backgroundprompt === null) { // cancels if prompt is canceled
        console.log('Canceled.');
    } else { // grabs prompted background and replaces iready background every millisecond
        setInterval(function () { try{
            if (document.querySelector("#background-image").src !== backgroundprompt)
                document.querySelector("#background-image").src = `${backgroundprompt}` }catch(e){} 
        }, 1);
    }
}

//GUI Utils
function dragElement(e){var n=0,t=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=f}function f(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u}

// GUI
UI.innerHTML = `<div id="Launcher" class="Launcher" style="outline: gray solid 2px;min-height: 250px;transform: 
translateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 5px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
<center><h1 class="bottomTitle" ></h1></center>
<img id="nullicon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEVHcEw5OTk6OjpdXV1OTk44ODg6Ojo6Ojo4ODhLS0tcXFxcXFw6Ojo6OjpPT085OTk7OztbW1taWlpdXV1aWlo6OjpcXFw4ODg4ODhISEhcXFxcXFxcXFxbW1tcXFxcXFw6OjpcXFxbW1s7Ozs8PDw4ODg3Nzc3NzdcXFxdXV08PDw8PDxdXV05OTk8PDywq9ZkAAAALHRSTlMAVvqlBCpRQzYLWu/jOxHtiEAY20fbK5rmHpT56Gm4gpTL0WTFs0xyjnWm9agsVPsAAAC6SURBVCjPrdLZEkMwGIbhkEQEse873Vvc/+U1gk4ZDjrT9/B7xn8iAMy5Gsy91EFgVVg1WSfSoWbOI3VSr/suKwuX71re7dT6gLg+1NdrDrWEgT6uCXXuyzW9LELE7GAAPc+ICA0fTddWPkWErzwBPIubCRCpjWFqgdEYW9Y19JIy/ArkAJT/wfUIVPUb5H2Qj7+I98ECVLrIW5DPJ/F/k1sgAGMxGzb+PAbEImuC15NsHgo/ifF8YuwNDTNKUtRpX3AAAAAASUVORK5CYII=" class="center">
    <h1 class="title"><center>Nullify</center></h1>
    <center><h1 class="bottomTitle" >3.0</h1></center>
<style id="bruh">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');

.title {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    color: white
}

.bottomTitle {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    margin-top: -0.7rem;
}

.button {
  font-family: 'Nunito', sans-serif;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: white; 
  background-color: black;
}
.button:hover {
  color: black;
  background-color: grey
}
.button:active {
  background-color: black;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
    <button onclick="yes()" id="i-Ready" class="button">Skip Lesson</button>
    <button onclick="minFarmer()" id="i-Ready-Farmer" class="button">${moduleNames.minfarm}</button>
    <button onclick="open_discord()" id="Discord" class="button">Discord</button>
    <button onclick="open_misc()" id="Misc" class="button">Misc</button>
    <br>
</div>`

document.body.appendChild(UI);
dragElement(UI.firstElementChild);

let misc = document.createElement('div')
misc.innerHTML = `<div id="misclauncher" class="Launcher" style="display:none; outline: gray solid 2px;min-height: 250px;transform:
translateX(188px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background:
black;position: absolute;border-radius: 5px;display: none;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
<center><h1 class="bottomTitle" ></h1></center>
    <h1 class="title"><center>Misc</center></h1>
    <button onclick="themes()" id="Themes" class="button">Themes</button>
    <button onclick="open_tutorial()" id="Tutorial" class="button">Tutorial</button>
    <button onclick="changeName()" id="ChangeName" class="button">Change Name</button>
    <button onclick="freeGames()" id="FreeGames" class="button">Free Games</button>
    <button onclick="changeBackground()" id="ChangeBackground" class="button">Change Background</button>
</div>`
UI.appendChild(misc);
dragElement(document.getElementById('misclauncher'));

let theme = document.createElement('div')
theme.innerHTML = `
<div id="themeslauncher" class="Launcher" style="display:none; outline: gray solid 2px;min-height: 250px;transform: 
translateX(376px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 5px;display: none;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
<center><h1 class="bottomTitle" ></h1></center>
    <h1 class="title"><center>Themes</center></h1>
    <button onclick="changeToTheme('default')" class="button">Default</button>
    <button onclick="changeToTheme('red')" class="button">Red</button>
    <button onclick="changeToTheme('purple')" class="button">Purple</button>
    <button onclick="changeToTheme('blue')" class="button">Blue</button>
    <button onclick="changeToTheme('green')" class="button">Green</button>
    <button onclick="changeToTheme('cherryblossom')" class="button">Cherry Blossom</button>
</div>`
UI.appendChild(theme)
dragElement(document.getElementById("themeslauncher"))

if (localStorage.getItem("theme") != null) {
    changeToTheme(localStorage.getItem("theme"))
}

let msg = "%c Nullify has been injected!"; 
let styles= [ 
    'font-size: 12px', 
    'font-family: monospace', 
    'background: white', 
    'display: inline-block', 
    'color: black', 
    'padding: 8px 19px',
    'border: 1px dashed;' 
].join(';') 

let functionsScript = document.createElement('script')
functionsScript.innerHTML = `${open_discord.toString()}\n ${open_tutorial.toString()}\n ${stop_farmer.toString()}\n ${stop_alert.toString()}\n ${themes.toString()}\n ${dragElement.toString()}\n ${open_tutorial.toString()}\n ${changeToTheme.toString()}\n ${welcomeModalOpen.toString()}\n ${open_misc.toString()}\n ${minFarmer.toString()} ${setTextStart.toString()}\n ${setTextStop.toString()}\n ${changeName.toString()}\n ${changeBackground.toString()}\n ${freeGames.toString()}`
document.body.appendChild(functionsScript)
