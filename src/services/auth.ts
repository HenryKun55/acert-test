export function isAuth() { return localStorage.getItem('isAuth') === 'true' }
export function login(id: number | undefined){ 
    localStorage.setItem('id', String(id) )
    localStorage.setItem('isAuth', 'true') 
}
export function logout() { 
    localStorage.setItem('id', '' )
    localStorage.setItem('isAuth', 'false') 
}

export function getId() {
    return localStorage.getItem('id')
}
