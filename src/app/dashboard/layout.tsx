import '@ui5/webcomponents-react/dist/Assets';

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <h1 className='text-2xl text-center mx-auto p-5 bg-gray-500 text-white font-bold'>Leave Request Dashboard</h1>
        {children}
        </>
    )
}