import { chromium } from "playwright";

const browser = await chromium.launch(
    {headless : true}
)

const page = await browser.newPage()

await page.goto(
    "https://librefutboltv.net/agenda"
)

const products = await page.$$eval(
    "#wraper",
    (results) =>{
        console.log(results);
       return results
    }
)
// const locator =  page.locator('div');
// const moreThanTen = await locator.evaluateAll((divs) => {if (divs.length) return });
// console.log(moreThanTen);

console.log(products);