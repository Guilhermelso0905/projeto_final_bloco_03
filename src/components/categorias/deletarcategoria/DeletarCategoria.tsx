import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import type Categoria from "../../../models/Categoria"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
            } else {
                alert('Erro ao deletar A Categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categoria")
    }

    return (
        <div className="flex w-screen h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
            <div className='container w-1/3 mx-auto'>
                <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
                <p className='text-center font-semibold mb-4'>
                    Você tem certeza de que deseja apagar a categoria a seguir?(essa ação é permanente)</p>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Categoria</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{categoria.nome}</p>
                        <div className='flex justify-around'>
                            <div className="inline-flex items-center px-5 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <button
                                    onClick={deletarCategoria}>                        
                                    {isLoading ?
                                        <RotatingLines
                                            strokeColor="white"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="24"
                                            visible={true}
                                        /> :
                                        <span>Sim</span>
                                    }</button>
                            </div>
                            <div className="inline-flex items-center px-5 py-2 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <button onClick={retornar}>Não</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria