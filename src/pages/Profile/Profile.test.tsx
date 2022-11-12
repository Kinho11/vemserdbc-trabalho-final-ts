import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';


describe('Verificar se existem os componentes na tela profile',()=>{
    test('Verificar se existe foto de perfil', ()=>{
        render(<Profile/>)

        const img = screen.getByRole('img')

        expect(img).toBeInTheDocument()
    })
})