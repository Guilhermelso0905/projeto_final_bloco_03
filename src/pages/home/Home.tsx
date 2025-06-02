function Home() {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <div className="text-center p-8 bg-blue-600 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg max-w-md w-full">
                <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-md">
                    Farmácia Drogazen
                </h1>
                <p className="text-lg text-white mb-6 drop-shadow-sm">
                    Os melhores preços da região, com qualidade e cuidado.
                </p>
            </div>
        </div>
    );
}

export default Home;
