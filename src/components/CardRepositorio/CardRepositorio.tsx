import React from 'react'

import { CardContainer } from './CardRepositorio.styled'

import {BsFolder2Open} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

type Tprops = {
    repoNome: string,
    repoDescricao: string,
    repoLinguagens: string,
    repoLink: string
}

export const CardRepositorio: React.FC<Tprops>= ({repoNome, repoDescricao, repoLinguagens, repoLink}) => {
  return (
    <>
        <CardContainer>
            <div className='cards'>
                <span className='icone'>
                    <a href={repoLink} rel="noreferrer" target='_blank'><i><BsFolder2Open/></i></a>
                    <i><FiGithub/></i>
                </span>

                <div className='infoRepo'>
                    <p>{repoNome}</p>

                    {!repoDescricao && <p>Repositório sem Descrição</p>}
                    {repoDescricao && <p>{repoDescricao}</p>}

                    {!repoLinguagens && <p>Repositório sem Linguagem</p>}
                    {repoLinguagens && <p>{repoLinguagens}</p>}
                </div>

            </div>
        </CardContainer>
    
    </>
  )
}
