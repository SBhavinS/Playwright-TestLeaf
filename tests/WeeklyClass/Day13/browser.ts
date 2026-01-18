export class Browser{
    browserName:string;

    public browserType(){
        console.log("browserType method in Browser class")
    }
    public browserVersion(){
        console.log("browserVersion method in Browser class")
    }
    constructor(browserName:string){
        this.browserName=browserName
        console.log("Browser Name is: "+this.browserName)
    }
}
