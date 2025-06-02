function Navbar() {
    return (
        <>
            <nav className="bg-blue-600">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://i.imgur.com/Z9VKKrr.jpeg" alt="Logo" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="block rounded-md bg-cyan-500 px-3 py-2 text-base font-medium text-white" aria-current="page">Farmacia Drogazen</a>
                                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-cyan-400 hover:text-white">Categorias</a>
                                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-cyan-400 hover:text-white">Nova Categoria</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar