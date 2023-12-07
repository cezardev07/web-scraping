import puppeteer from "puppeteer";

export default class WikipediaInfo{
  async getWikipediaInfo(searchQuery) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://pt.wikipedia.org/wiki/${encodeURIComponent(searchQuery)}`);  
    await page.waitForSelector('.mw-parser-output');
  
    const result = await page.evaluate(() => {
      const paragraphs = document.querySelectorAll(".mw-parser-output p");
      if (paragraphs.length > 0) {  
        const array = []
        paragraphs.forEach(el => {
          array.push(el.innerHTML)
        })  
        return array;
      } else {
        return 'Nenhuma informação encontrada na Wikipedia.';
      }
    });
  
    await browser.close();
    return result;
  }
}