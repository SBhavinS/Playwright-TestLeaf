import { customFixtureLT } from "./fixtureLT.ts";

customFixtureLT("LeafTaps Application Sanity Testing",async({LeafTaps})=>{

   const title= await LeafTaps.title()
 console.log("Title of the page:",title)

 await LeafTaps.click("(//a[contains(text(),'Leads')])[1]")


})