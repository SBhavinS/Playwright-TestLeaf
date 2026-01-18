import {Browser} from './browser';
class Edge extends Browser{
    launchEdgeBrowser(){
        console.log("Launch the Edge Browser")
    }
}

let edgeObject=new Edge("Microsoft Edge")
edgeObject.launchEdgeBrowser()
edgeObject.browserType()
edgeObject.browserVersion()