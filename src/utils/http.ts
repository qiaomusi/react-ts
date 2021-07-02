import axios from 'axios';

interface IResponse<T> {
    message: string,
    data: T,
    success: boolean
}

type IParams = {
    url: string,
    type: 'get'|'post',
    data?: any
}

function request(data: IParams): Promise<IResponse<number []>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                message: '获取成功',
                success: true,
                data: [ 1, 2, 3 ]
            })
        }, 2000)
    })
}

const get = (url: string, data: any) => {
    return axios.get(url, data);
}

const post = (url: string, data: any) => {
    return axios.post(url, data);
}

export {
    request,
    get,
    post
}