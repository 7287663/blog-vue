import v from "../utils/request";


export function blogList(page, size, searchMap) {
  return v.request.post(`/blog/list/${page}/${size}`, searchMap);
}


export function getBlog(id) {
  return v.request.post(`/blog/${id}`);
}

export function addLike(id, type) {
  return v.request.put(`blog/like/add/${id}/${type}`)

}

export function subLike(id, type) {
  return v.request.put(`blog/like/sub/${id}/${type}`)
}

export function getCode() {
  return v.request.get('img')
}

export function getBlogLike(id) {
  return v.request.get(`/blog/like/${id}`);
}