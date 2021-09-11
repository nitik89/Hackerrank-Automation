let puppet=require('puppeteer');
let codes=require('./code');

let browserStart=puppet.launch({
    headless:false,
    // slowMo:1000,
    defaultViewport:null,
    args:["--start-maximized","--disable-notifications"]

})
let cpage,browser,pageList;
browserStart.then((browserObj)=>{
    console.log("opened");
    browser=browserObj;
    let browserTabPromise=browserObj.newPage();

    return browserTabPromise;

}).then(function(page)
{
    cpage=page
    let gpage=page.goto('https://google.com/');
    
    console.log("new tab opened")
    return gpage;
}).then(()=>{

    let waitForTyping=cpage.type("input[title='Search']","hackerrank");
    console.log("opened google");
    return waitForTyping
    
}).then(()=>{
    let enterWillDone=cpage.keyboard.press('Enter');
    return enterWillDone;
}).then(()=>{
    let waitforpromise=cpage.waitForSelector('.LC20lb.DKV0Md',{visible:true})
    return waitforpromise;
}).then(()=>{
    let clickit=cpage.click('.LC20lb.DKV0Md');
    return clickit;
}).then(()=>{
    let waitforpromise=cpage.waitForSelector("a[data-event-action='Login']",{visible:true})
    return waitforpromise;
}).then(()=>{
    let clickit=cpage.click("a[data-event-action='Login']")
    return clickit;
}).then(()=>{
    let waitforpromise=cpage.waitForSelector("a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']",{visible:true})
    return waitforpromise;
}).then(()=>{
    let clickit=cpage.click("a[href='https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button']");
    return clickit;
}).then(()=>{
    let waitforpromise=cpage.waitForSelector("input[id='input-1']",{visible:true})
    return waitforpromise;
}).then(()=>{
    let typeIt=cpage.type("input[id='input-1']","xiyira3749@macauvpn.com");
    return typeIt;
}).then(()=>{
    let waitforpromise=cpage.waitForSelector("input[id='input-2']",{visible:true})
    return waitforpromise;
}).then(()=>{
    let typeIt=cpage.type("input[id='input-2']","rahul123@");
    return typeIt;
}).then(()=>{
    let waitforit=cpage.waitFor(3000);
    return waitforit;
}).then(()=>{
    let clickit=cpage.click("button[data-analytics='LoginPassword']");
    return clickit;
}).then(()=>{
    let waitforit=cpage.waitFor(3000);
    return waitforit;
}).then(()=>{
    let waitforpromise=waitAndClick("a[data-attr1='algorithms']",cpage);
    return waitforpromise;
}).then(()=>{
    let waitforit=cpage.waitFor(2000);
    return waitforit;
}).then(()=>{
    let getToWarmUp=waitAndClick("input[value='warmup']",cpage);
    return getToWarmUp;
}).then(()=>{
    let waitforit=cpage.waitFor(2000);
    return waitforit;
}).then(()=>{
   let arrSolveChallanges=cpage.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
   return arrSolveChallanges;
  
}).then((questionsArr)=>{

questionSolve(cpage,questionsArr[0],codes.answers[0]);


})
function questionSolve(Cpage,question,answer){
    return new Promise((resolve,reject)=>{
        let questionsPromise=question.click();
        questionsPromise.then(()=>{
            let pr=waitAndClick(".monaco-editor.no-user-select.vs",Cpage);
            return pr;
        }).then(()=>{
                let waitforpromise=waitAndClick("input[type='checkbox']",Cpage);
               return waitforpromise
            }).then(()=>{
                let typeIt=Cpage.type("input[type='checkbox']",codes.answers[0]);
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.down('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.press('KeyA');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.up('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.down('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.press('KeyX');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.up('Control');
                return typeIt;
            }).then(()=>{
                let waitforit=Cpage.waitFor(1000);
                return waitforit;
            }).then(()=>{
                let waitforpromise=waitAndClick(".view-lines",cpage);
               return waitforpromise
            }).then(()=>{
                let typeIt=Cpage.keyboard.down('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.press('KeyA');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.up('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.press('Backspace');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.down('Control');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.press('KeyV');
                return typeIt;
            }).then(()=>{
                let typeIt=Cpage.keyboard.up('Control');
                return typeIt;
            }).then(()=>{
                let waitforpromise=waitAndClick(".ui-content.align-icon-right",Cpage);
                return waitforpromise
            })
                .then(()=>{
                    let waitforpromise=waitAndClick(".hr-monaco-submit",Cpage);
                    return waitforpromise
                })
               .then(()=>{
                    resolve();
                }).then((err)=>{
                    reject(err);
                })
            })    
            
}
// }).then(()=>{
//     let waitforit=cpage.waitFor(2000);
//     return waitforit;//here
// }).then(()=>{
//     let waitforpromise=waitAndClick(".view-lines",cpage);
//    return waitforpromise
// }).then(()=>{
//         let typeIt=cpage.keyboard.down('Control');
//         return typeIt;
//     }).then(()=>{
//         let typeIt=cpage.keyboard.press('KeyA');
//         return typeIt;
//     }).then(()=>{
//         let typeIt=cpage.keyboard.up('Control');
//         return typeIt;
//     }).then(()=>{
//         let typeIt=cpage.keyboard.up('Control');
//         return typeIt;
//     }).then(()=>{
//         let typeIt=cpage.keyboard.press('Backspace');
//         return typeIt;
//     }).then(()=>{
//         let that=codes.answers[0].split('\n');
//         let typeIt=cpage.type(".view-lines",that[0]);
//         return typeIt;
//     })
// }).then(()=>{
//     let waitforpromise=waitAndClick("input[type='checkbox']",cpage);
//    return waitforpromise
// }).then(()=>{
//     let typeIt=cpage.type("input[type='checkbox']",codes.answers[0]);
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.down('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.press('KeyA');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.up('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.down('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.press('KeyX');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.up('Control');
//     return typeIt;
// }).then(()=>{
//     let waitforit=cpage.waitFor(1000);
//     return waitforit;
// }).then(()=>{
//     let waitforpromise=waitAndClick(".view-lines",cpage);
//    return waitforpromise
// }).then(()=>{
//     let typeIt=cpage.keyboard.down('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.press('KeyA');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.up('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.press('Backspace');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.down('Control');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.press('KeyV');
//     return typeIt;
// }).then(()=>{
//     let typeIt=cpage.keyboard.up('Control');
//     return typeIt;
// }).then(()=>{
//     let waitforpromise=waitAndClick(".hr-monaco-submit",cpage);
//     return waitforpromise
// })
// //https://www.hackerrank.com/login?h_r=login&h_l=body_middle_left_button
// //button class="ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled" type="submit" data-analytics="LoginPassword"><div class="ui-content align-icon-right"><span class="ui-text" aria-hidden="false">Log In</span></div></button>

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector, { visible: true });
        waitForModalPromise
            .then(function () {
                let clickModal =
                    cPage.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err)
            })
    }
    )
}
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