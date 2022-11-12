import React from 'react'

import { Section,ContainerCards } from './Profile.styled'

import {BiUser} from 'react-icons/bi'
import {MdOutlineDescription} from 'react-icons/md'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiUserPlus} from 'react-icons/fi'
import {FaUserPlus} from 'react-icons/fa'
import { CardRepositorio } from '../../components/CardRepositorio/CardRepositorio'


export const Profile = () => {
  return (
    <>
      <Section>
        <div className='container'>
          <div className='nameUser'>
            <span>
              <h3>Nome:</h3>
              <h1 className='nome'>Nome do usuário</h1>
            </span>
            <span>
              <i className='iconUser'><BiUser/></i>
            </span>
          </div>

            <div className='informacoes'>

              <div className='infoUser'>
                <i><MdOutlineDescription/></i>
                <p>Descrição do perfil</p>
              </div>

              <div className='infoUser'>
                <i><HiOutlineLocationMarker/></i>
                <p>Localização</p>
              </div>

              <div className='infoUserSeguidores'>
                <div>
                  <i><FiUserPlus/></i>
                  <p>XX Seguidores</p>
                </div>

                <div>
                  <i><FaUserPlus/></i>
                  <p>XX Seguindo</p>
                </div>
              </div>

            </div>
        </div>

        <h1>Repositórios</h1>
      </Section>
      <ContainerCards>
        <CardRepositorio repoNome='Marcus' repoDescricao='Meu site' repoLinguagens='Javascript'/>
      </ContainerCards>
    </>
  )
}
