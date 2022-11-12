import axios from 'axios'
import { useState, useEffect } from 'react'
import { Section,ContainerCards } from './Profile.styled'

import {MdOutlineDescription} from 'react-icons/md'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiUserPlus} from 'react-icons/fi'
import {FaUserPlus} from 'react-icons/fa'
import { CardRepositorio } from '../../components/CardRepositorio/CardRepositorio'
import { useParams, useNavigate } from 'react-router-dom'

const API = {
  url: 'https://api.github.com/users/',
  clientId: 'ca96ffe8ec2af85ec884',
  clientSecret: 'd14a35207f88b4d3b34871cfecddb704a9897976'
}

type TUser = {
  name: string,
  bio: string,
  location: string,
  followers: number,
  following: number,
  avatar_url: string
}

type TRepos = {
  name: string,
  description: string,
  language: string,
  id: number,
  html_url: string
}

export const Profile = () => {
  const { username } = useParams<string>()
  const [user, setUser] = useState<TUser>()
  const [repositorios, setRepositorios] = useState<TRepos[]>()
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${API.url}${username}?client_id=${API.clientId}?client_secret=${API.clientSecret}`)
      setUser(data)
    } catch (error) {
      navigate('/perfil/notfound')
    }
  }

  const getRepositorios = async () => {
    try {
      const { data } = await axios.get(`${API.url}${username}/repos?client_id=${API.clientId}?client_secret=${API.clientSecret}`)
      setRepositorios(data)
    } catch (error) {
      navigate('/perfil/notfound')
    }
  }

  useEffect(() => {
    getUser()
    getRepositorios()
  }, [])

  return (
    <>
      <Section>
        <div className='container'>
          <div className='nameUser'>
            <span>
              <h3>Nome:</h3>
              <h1 className='nome'>{user?.name}</h1>
            </span>
            <span>
              <img className='iconUser' src={user?.avatar_url} alt="User Avatar" />
            </span>
          </div>
          <div className='informacoes'>
            <div className='infoUser'>
              <i className='icone'><MdOutlineDescription/></i>
              <p className='bio'>{user?.bio}</p>
            </div>
            <div className='infoUser'>
              <i className='icone'><HiOutlineLocationMarker/></i>
                {!user?.location && <p>Sem localização</p>}
                {user?.location && <p>{user?.location}</p>}
            </div>
            <div className='infoUserSeguidores'>
              <div>
                <i className='icone'><FiUserPlus/></i>
                <p>{user?.followers} Seguidores</p>
              </div>
              <div>
                <i className='icone'><FaUserPlus/></i>
                <p>{user?.following} Seguindo</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Repositórios</h1>
      </Section>
      <ContainerCards>
        {repositorios?.map((repositorio) => (
          <CardRepositorio key={repositorio.id} repoNome={repositorio.name} repoDescricao={repositorio.description} repoLinguagens={repositorio.language} repoLink={repositorio.html_url}/>
        ))}
      </ContainerCards>
    </>
  )
}
