function Home() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center bg-cyan-400">
                <div>
                    <div className="max-w-7xl flex flex-col items-center">
                        <h2 className="text-white text-4xl">Farmacia Drogazen</h2>
                        <p className="text-white text-lg">Melhores Preços da Região</p>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/Z9VKKrr.jpeg"
                            alt="Imagem da Página Home"
                            width="20%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home