import BaseService from "./BaseService"

const base_service = new BaseService();

export default class NewsService{

    getAllNews = () => base_service.getElements("/News/GetAllNews")

}