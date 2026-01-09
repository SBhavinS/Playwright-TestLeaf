import dotenv from'dotenv'
import test from 'playwright/test'

//read multiple env -> fileName
const fileToRead=process.env.envFile||'DEV'
dotenv.config({path:`Data/${fileToRead}.env`})

test("Login with ENV File",async({page})=>{

//process.env.keyName
//process-> global object for node .js
//env-> Enviroment
//keyname-> SF_Username

let url=process.env.LT_url as string
let uName=process.env.LT_username as string
let pass=process.env.LT_password as string

    await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(pass)
        await page.locator("//input[@class='decorativeSubmit']").click()
    
})