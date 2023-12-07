import WikipediaInfo from "../puppeteer/puppeteer.js";

export default class controller{
  async get(req, res){
    try {
      const { prompt } = req.params;
      const wikipediaInfo = new WikipediaInfo();
      const mensage = await wikipediaInfo.getWikipediaInfo(prompt);
      return res.status(200).json({
        status: 200,
        mensage,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        mensage: "algo deu errado!",
      });
    }
  }
}