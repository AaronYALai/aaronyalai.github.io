(function(){
    /* tokens */
    var ppcs="%3Cdiv%20id%3D%27dv_pp_wt24KuqTV9SB%27%3E%3Cscript%20id%3D%22mNCC%22%20language%3D%22javascript%22%3E%0A%20%20%20medianet_width%20%3D%20%22300%22%3B%0A%20%20%20medianet_height%20%3D%20%22250%22%3B%0A%20%20%20medianet_crid%20%3D%20%22110331103%22%3B%0A%20%20%20medianet_versionId%20%3D%20%22111299%22%3B%0A%20%20%20%28function%28%29%20%7B%0A%20%20%20%20%20%20%20var%20isSSL%20%3D%20%27https%3A%27%20%3D%3D%20document.location.protocol%3B%0A%20%20%20%20%20%20%20var%20mnSrc%20%3D%20%28isSSL%20%3F%20%27https%3A%27%20%3A%20%27http%3A%27%29%20%2B%20%27%2F%2Fcontextual.media.net%2Fnmedianet.js%3Fcid%3D8CUJGD573%27%20%2B%20%28isSSL%20%3F%20%27%26https%3D1%27%20%3A%20%27%27%29%3B%0A%20%20%20%20%20%20%20document.write%28%27%3Cscr%27%20%2B%20%27ipt%20type%3D%22text%2Fjavascript%22%20id%3D%22mNSC%22%20src%3D%22%27%20%2B%20mnSrc%20%2B%20%27%22%3E%3C%2Fscr%27%20%2B%20%27ipt%3E%27%29%3B%0A%20%20%20%7D%29%28%29%3B%0A%3C%2Fscript%3E%3C%2Fdiv%3E",
        ppps="%3Cdiv%20style%3D%22display%3Anone%22%3E%3Ciframe%20src%3D%22%2F%2Fbh.contextweb.com%2Fbh%2Fvisitormatch%3Ftag%3D491196%26pid%3D560441%22%3E%3C%2Fiframe%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22display%3Anone%3Bwidth%3A0%3Bheight%3A0%22%3E%3CIFRAME%20SRC%3D%22http%3A%2F%2Fpixel.quantserve.com%2Fpixel%2Fp-01-0VIaSjnOLg.gif%3Ftags%3DCONTEXTWEB.IAB19-34%2CPUBLISHER.560441%2C%2CCAMPAIGN.0.0%2CAA_30000%2CAA_30101%2CAA_30301%2CAA_30602%2CAA_30800%2CAA_30206%2CAA_30902%2CADSIZE.300X250%2CZIPCODE.100%2CPUBLISHERDOMAIN.egrappler.com%22%20HEIGHT%3D%220%22%20WIDTH%3D%220%22%20MARGINWIDTH%3D%220%22%20MARGINHEIGHT%3D%220%22%20ALLOWTRANSPARENCY%3D%22true%22%20FRAMEBORDER%3D%220%22%20SCROLLING%3D%22NO%22%3E%3C%2FIFRAME%3E%3C%2Fdiv%3E%3Cimg%20src%3D%22http%3A%2F%2Fidsync.rlcdn.com%2F400066.gif%3Fpartner_uid%3DhQBUkbRgs8zB%22%20height%3D%221%22%20width%3D%221%22%20border%3D%220%22%2F%3E%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22http%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D96678%26dpuuid%3DhQBUkbRgs8zB%22%3E%3C%2Fscript%3E",
        pp_exp="0",
        ppContainerId = "pp_ad_container_0",
        maOpts = {"enabled":false,"maxSeqNum":0,"periodMax":0,"periodMin":0,"rotatingPassback":false,"skipRotation":false},
        /* selecting parent.parent.pp in case this is in multiple iframes */
        pp = window.pp || parent.pp || parent.parent.pp,
        runSafe = function(func){
            try{
                return func();
            }catch(ignore){}
        },
        thisAd = runSafe(function(){
            if (typeof pp === 'object' && typeof pp.updateMaOpts === 'function') {
                return pp.updateMaOpts(ppContainerId, maOpts);
            }
        }),
        docWrite = function(str){
            document.write(decodeURIComponent(str)); // jshint ignore:line
        };
    /* right before rendering the creative, the previous one will be rotated if necessary */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.beforeRenderAd === 'function') {
            pp.beforeRenderAd(ppContainerId);
        }
    });
    /* only render ad if necessary according to MA config */
    if (typeof thisAd !== 'object' || typeof thisAd.maOpts !== 'object' || !thisAd.maOpts.skipRotation) {
        //inline rendering using document.write
        if(pp_exp=='1'){
            try{
                /* used in async javascript [1.0], where the ad itself is rendered in an iframe */
                parent.pp.AdManager.displayExpandable(window.frameElement,decodeURIComponent(ppcs));
                docWrite(ppps);
            }catch(e){
                docWrite(ppcs+ppps);
            }
        } else {
            docWrite(ppcs+ppps);
        }
    }
    /* after rendering or skipping the creative the next rotation must be scheduled (according to 'maOpts') */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.afterRenderAd === 'function') {
            pp.afterRenderAd(ppContainerId);
        }
    });
})();