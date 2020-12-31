import v from "../utils/request";

export function tagList() {
    const  tagList = v.request.get("/tag/list");
    return tagList;
}
export function addTag(pojo) {
    return v.request.post("/tag",pojo)
}
export  function getById(id) {
    return v.request.get(`/tag/${id}`)
}
export function deleteById(id) {
    return v.request.delete(`/tag/${id}`)
}
export function update(pojo) {
    return v.request.put(`/tag`,pojo)
}