type BASE_PATHS_PROPS = {
    AUTH: string,
    APP: string
}

type AUTH_PATHS_PROPS = {
    SIGNIN: string
}

type ADMIN_PATHS_PROPS = {
    OVERVIEW: string
}

export const BASE_PATHS:BASE_PATHS_PROPS = {
    AUTH: "auth",
    APP: ''
}

export const AUTH_PATHS:AUTH_PATHS_PROPS = {
    SIGNIN: 'signin'
}

export const ADMIN_PATHS:ADMIN_PATHS_PROPS = {
    OVERVIEW: 'overview'
}