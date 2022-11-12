import styled from 'styled-components'

export const Section = styled.section`
    max-width: 1000px;
    margin: 148px auto;
    color: white;
    /* background-color: red; */

    .container{
        max-width:580px ;
        margin: 0 auto;

        .nameUser{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            span:first-child h3{
                margin: 0;
                font-size: 14px;
                font-weight: 400;
            }

            span .nome{
                color: #68E7E7;
                font-weight: 700;
                font-size: 48px;
                margin: 0;
                white-space: nowrap;
            }

            .iconUser{
                width: 150px;
                border-radius: 100%;
            }
        }

        .informacoes{
            display: flex;
            flex-direction: column;
            margin-top: -40px;

            .infoUser{
                display: flex;
                align-items: center;
                gap: 8px;

                .bio{
                    max-width: 420px;
                }
            }

            .infoUserSeguidores{
                display: flex;
                gap: 20px;
                div{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            }

            .icone{
                font-size: 1.3rem;
            }
        }
        

    }

    h1{
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: #68E7E7;
        margin-top: 100px;
    }

    
`

export const ContainerCards = styled.section`
    max-width: 1200px;
    margin: 30px auto;
    margin-top: -100px;
    display: flex;
    flex-wrap: wrap;
    gap: 22px;

    .load{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 150px;
    }
`
