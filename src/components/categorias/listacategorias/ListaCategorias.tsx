import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListaCategorias() {


    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categoria', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }
    useEffect(() => {
        buscarCategorias()
    }, [])


    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )

            }
            <div className="flex w-screen h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
                <div className="flex justify-center w-full my-4 ">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {categorias.map((categorias: Categoria) => (
                                <CardCategorias key={categorias.id} categoria={categorias} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;