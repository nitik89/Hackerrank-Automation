let puppet=require('puppeteer');
let codes=require('./code');

let browserStart=puppet.launch({
    headless:false,
    // slowMo:1000,
    defaultViewport:null,
    args:["--start-maximized","--disable-notifications"]

})
let cpage,pageList;
(async function fn(){
    try{
    browser=await browserStart;
 page=await browser.newPage();
 cpage=page;
 await cpage.goto('https://www.hackerrank.com/auth/login');

await cpage.waitForSelector("input[id='input-1']",{visible:true});
await cpage.type("input[id='input-1']","xiyira3749@macauvpn.com");
await cpage.waitForSelector("input[id='input-2']",{visible:true});
await cpage.type("input[id='input-2']","rahul123@");
await cpage.waitFor(3000);
await cpage.click("button[data-analytics='LoginPassword']");
await page.waitFor(3000);
await waitAndClick("a[data-attr1='algorithms']",cpage);
await cpage.waitFor(2000);
await waitAndClick("input[value='warmup']",cpage);
await cpage.waitFor(2000);
let arrSolveChallanges=await cpage.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');

    await questionSolve(cpage, arrSolveChallanges[0], codes.answers[0]);

//await questionSolve(cpage,arrSolveChallanges[0],codes.answers[0]);
    }
    catch(err){
        console.log(err);
    }
})();

async function questionSolve(Cpage,question,answer){
    return new Promise (async (resolve,reject)=>{
        try{
        await question.click();
        await waitAndClick(".monaco-editor.no-user-select.vs",Cpage);
     await waitAndClick("input[type='checkbox']",Cpage);
        await Cpage.type("input[type='checkbox']",answer);
        await Cpage.keyboard.down('Control');
        await Cpage.keyboard.press('KeyA');
        await Cpage.keyboard.up('Control');
        await Cpage.keyboard.down('Control');
        await Cpage.keyboard.press('KeyX');
        await Cpage.keyboard.up('Control');
        await Cpage.waitFor(2000);
        await waitAndClick(".view-lines",cpage);
        await waitAndClick(".view-lines",cpage);
        await Cpage.keyboard.down('Control');
        await Cpage.keyboard.press('KeyA');
        await Cpage.keyboard.up('Control');
        await Cpage.keyboard.press('Backspace');
        await Cpage.keyboard.down('Control');
        await Cpage.keyboard.press('KeyV');
        await Cpage.keyboard.up('Control');
        await waitAndClick(".ui-content.align-icon-right",Cpage);
        await waitAndClick(".hr-monaco-submit",Cpage);
        resolve();
        }
        catch(err){
            reject(err);
        }
               
               
            })    
            
}

function waitAndClick(selector, cPage) {
    return new Promise(async function (resolve, reject) {
        try{
       await cPage.waitForSelector(selector, { visible: true });
       await cPage.click(selector, { delay: 200 });
                resolve();
        }
        catch(err){
            reject(err);
        }
    
})}
// promise -> banner is present or not  -> the code will run 
function handleIfNotPresent(selector, cPage) {
    return new Promise(function (resolve, reject) {
        // wait clickModal
        let waitAndClickPromise = waitAndClick(selector, cPage);
        waitAndClickPromise.then(function () {
            resolve();
        })
        waitAndClickPromise.catch(function (err) {
            resolve();
        })
    })
}

