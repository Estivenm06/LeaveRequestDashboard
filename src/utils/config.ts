
const DATABASE_URL = () => {
    const envURL: string | undefined = process.env.NEXT_PUBLIC_DATABASE_URL;
    if(envURL){
        return envURL
    }else {
        throw Error('Database url not supplied.')
    }
}

export {
    DATABASE_URL
}