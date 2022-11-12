import React from 'react'

import { CardContainer } from './CardRepositorio.styled'

import {BsFolder2Open} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

type Tprops = {
    repoNome?: string,
    repoDescricao?: string,
    repoLinguagens?: string
}

export const CardRepositorio: React.FC<Tprops>= ({repoNome, repoDescricao, repoLinguagens}) => {
  return (
    <>
        <CardContainer>
            <div className='cards'>
                <span className='icone'>
                    <i><BsFolder2Open/></i>
                    <i><FiGithub/></i>
                </span>

                <div className='infoRepo'>
                    <p>{repoNome}</p>

                    <p>{repoDescricao}</p>

                    <p>{repoLinguagens}</p>
                </div>

            </div>
        </CardContainer>
    
    </>
  )
}
